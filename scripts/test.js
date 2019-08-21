const exec = require('shell-utils').exec;

run();

function run() {
  exec.execSync(`jest`);
  exec.execSync(`npm run test-unit-ios`);
  exec.execSync(`npm run test-unit-android`);
}
