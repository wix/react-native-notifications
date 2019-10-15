const exec = require('shell-utils').exec;

run();

function run() {
  exec.execSync(`jest`);
}