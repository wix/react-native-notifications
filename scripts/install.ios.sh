#!/bin/bash -e

$(dirname "$0")/install.sh

HOMEBREW_NO_INSTALL_CLEANUP=1 HOMEBREW_NO_AUTO_UPDATE=1 brew install ruby
export PATH="/usr/local/opt/ruby/bin:$PATH"
gem install xcpretty
export CODE_SIGNING_REQUIRED=NO
HOMEBREW_NO_INSTALL_CLEANUP=1 HOMEBREW_NO_AUTO_UPDATE=1 brew tap wix/brew
HOMEBREW_NO_INSTALL_CLEANUP=1 HOMEBREW_NO_AUTO_UPDATE=1 brew install applesimutils

echo 'export PATH=$PATH' >> $BASH_ENV