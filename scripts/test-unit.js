// const _ = require('lodash');
// const exec = require('shell-utils').exec;

// const android = _.includes(process.argv, '--android');
// const release = _.includes(process.argv, '--release');

// function run() {
//   if (android) {
//     runAndroidUnitTests();
//   } else {
//     runIosUnitTests();
//   }
// }

// function runAndroidUnitTests() {
//   const conf = release ? 'testReactNative60ReleaseUnitTest' : 'testReactNative60DebugUnitTest';
//   exec.execSync(`cd lib/android && ./gradlew ${conf}`);
// }

// function runIosUnitTests() {
//   exec.execSync('npm run build');
//   exec.execSync('npm run pod-install');
//   testTarget('NotificationsExampleApp', 'iPhone 12', '14.4');
// }

// function testTarget(scheme, device, OS = 'latest') {
//   const conf = release ? `Release` : `Debug`;
//   exec.execSync(`cd ./example/ios &&
//             RCT_NO_LAUNCH_PACKAGER=true
//             xcodebuild build build-for-testing
//             -scheme "${scheme}"
//             -workspace NotificationsExampleApp.xcworkspace
//             -sdk iphonesimulator
//             -configuration ${conf}
//             -derivedDataPath ./DerivedData/NotificationsExampleApp
//             -quiet
//             -UseModernBuildSystem=YES
//             ONLY_ACTIVE_ARCH=YES`);

//   exec.execSync(`cd ./example/ios &&
//             RCT_NO_LAUNCH_PACKAGER=true
//             xcodebuild test-without-building
//             -scheme "${scheme}"
//             -workspace NotificationsExampleApp.xcworkspace
//             -sdk iphonesimulator
//             -configuration ${conf}
//             -destination 'platform=iOS Simulator,name=${device},OS=${OS}'
//             -derivedDataPath ./DerivedData/NotificationsExampleApp
//             ONLY_ACTIVE_ARCH=YES`);
// }

// run();
