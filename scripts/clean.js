const exec = require('shell-utils').exec;

run();

function run() {
  exec.killPort(8081);
  exec.execSync(`watchman watch-del-all || true`);
  exec.execSync(`adb reverse tcp:8081 tcp:8081 || true`);
  exec.execSync(`rm -rf lib/ios/DerivedData`);
  exec.execSync(`rm -rf example/ios/DerivedData`);
  exec.execSync(`rm -rf lib/android/build`);
  exec.execSync(`rm -rf lib/android/app/build`);
  exec.execSync(`rm -rf example/android/build`);
  exec.execSync(`rm -rf example/android/app/build`);
  exec.execSync(`rm -rf lib/dist`);
}
