/* tslint:disable: no-console */
const exec = require('shell-utils').exec;
const semver = require('semver');
const fs = require('fs');
const _ = require('lodash');
const grenrc = require('../.grenrc');

// Workaround JS
const isRelease = process.env.BUILDKITE_MESSAGE.match(/^release$/i);
const BRANCH = process.env.BUILDKITE_BRANCH;

let VERSION, VERSION_TAG;
if (isRelease) {
    VERSION = cp.execSync(`buildkite-agent meta-data get version`).toString();
    VERSION_TAG = cp.execSync(`buildkite-agent meta-data get npm-tag`).toString();
}
// const VERSION_TAG = process.env.NPM_TAG || isRelease ? 'latest' : 'snapshot';
// const VERSION_INC = 'patch';

if (VERSION_TAG == 'null') {
    VERSION_TAG = isRelease ? 'latest' : 'snapshot';
  }
const VERSION_INC = 'patch';

function run() {
    if (!validateEnv()) {
        return;
    }
    setupGit();
    createNpmRc();
    versionTagAndPublish();
}

function validateEnv() {
    if (!process.env.CI) {
        throw new Error(`releasing is only available from CI`);
    }
    return true;
}

function setupGit() {
    exec.execSyncSilent(`git config --global push.default simple`);
    exec.execSyncSilent(`git config --global user.email "${process.env.GIT_EMAIL}"`);
    exec.execSyncSilent(`git config --global user.name "${process.env.GIT_USER}"`);
    const remoteUrl = new RegExp(`https?://(\\S+)`).exec(exec.execSyncRead(`git remote -v`))[1];
    exec.execSyncSilent(`git remote add deploy "https://${process.env.GIT_USER}:${process.env.GIT_TOKEN}@${remoteUrl}"`);
    // exec.execSync(`git checkout ${ONLY_ON_BRANCH}`);
}

function createNpmRc() {
    exec.execSync(`rm -f package-lock.json`);
    const content = `
email=\${NPM_EMAIL}
//registry.npmjs.org/:_authToken=\${NPM_TOKEN}
`;
    fs.writeFileSync(`.npmrc`, content);
}

function versionTagAndPublish() {
    const packageVersion = semver.clean(process.env.npm_package_version);
    console.log(`package version: ${packageVersion}`);

    const currentPublished = findCurrentPublishedVersion();
    console.log(`current published version: ${currentPublished}`);

    const version = isRelease
        ? process.env.VERSION
        : semver.gt(packageVersion, currentPublished)
            ? `${packageVersion}-snapshot.${process.env.BUILD_ID}`
            : `${currentPublished}-snapshot.${process.env.BUILD_ID}`;

    console.log(`Publishing version: ${version}`);

    tryPublishAndTag(version);
}

function findCurrentPublishedVersion() {
    return exec.execSyncRead(`npm view ${process.env.npm_package_name} dist-tags.latest`);
}

function tryPublishAndTag(version) {
    let theCandidate = version;
    for (let retry = 0; retry < 5; retry++) {
        try {
            tagAndPublish(theCandidate);
            console.log(`Released ${theCandidate}`);
            return;
        } catch (err) {
            const alreadyPublished = _.includes(err.toString(), 'You cannot publish over the previously published version');
            if (!alreadyPublished) {
                throw err;
            }
            console.log(`previously published. retrying with increased ${VERSION_INC}...`);
            theCandidate = semver.inc(theCandidate, VERSION_INC);
        }
    }
}

function tagAndPublish(newVersion) {
    console.log(`trying to publish ${newVersion}...`);
    exec.execSync(`npm --no-git-tag-version version ${newVersion}`);
    // exec.execSync(`npm publish --tag ${VERSION_TAG}`);
    exec.execSync(`git tag -a ${newVersion} -m "${newVersion}"`);
    exec.execSyncSilent(`git push deploy ${newVersion} || true`);
    if (isRelease) {
        updateGit(newVersion);
    }
}

function getPackageJsonPath() {
    return `${process.cwd()}/package.json`;
}

function writePackageJson(packageJson) {
    fs.writeFileSync(getPackageJsonPath(), JSON.stringify(packageJson, null, 2));
}

function readPackageJson() {
    return JSON.parse(fs.readFileSync(getPackageJsonPath()));
}

function updateGit(version) {
    exec.execSync(`git checkout ${BRANCH}`);
    updatePackageJson(version);
    generateChangelog();
    exec.execSync(`git commit -m "Update package.json version to ${version} and generate CHANGELOG.gren.md [ci skip]"`);
    exec.execSync(`git push deploy ${BRANCH}`);
    draftGitRelease(version);
}

function updatePackageJson(version) {
    const packageJson = readPackageJson();
    packageJson.version = version;
    writePackageJson(packageJson);
    exec.execSync(`git add package.json`);
}

function generateChangelog() {
    exec.execSync('npm run generate-changelog');
    exec.execSync(`git add ${grenrc.changelogFilename}`);
}

function draftGitRelease(version) {
    exec.execSync(`npx gren release --tags=${version}`);
}

run();
