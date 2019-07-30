#!/bin/bash -e
echo node -v $(node -v)

$(dirname "$0")/install.sh

if [ -z "$ZZ_BITRISE" ]; then
ANDROID_API=28
ANDROID_HOME="/usr/local/share/android-sdk"
echo "export ANDROID_API=${ANDROID_API}" >> $BASH_ENV
echo "export ANDROID_HOME=${ANDROID_HOME}" >> $BASH_ENV

cat $BASH_ENV

# jdk
HOMEBREW_NO_INSTALL_CLEANUP=1 HOMEBREW_NO_AUTO_UPDATE=1 brew untap adoptopenjdk/openjdk
HOMEBREW_NO_INSTALL_CLEANUP=1 HOMEBREW_NO_AUTO_UPDATE=1 brew cask install adoptopenjdk8

export PATH="$PATH:$ANDROID_HOME/tools/bin"

# set variables
ANDROID_SDK_URL="https://dl.google.com/android/repository/sdk-tools-darwin-4333796.zip"
TMP_DIR=$(mktemp -d)

# download and install sdk
cd "$TMP_DIR"
curl "$ANDROID_SDK_URL" > "sdk.zip"
unzip "sdk.zip" -d "$ANDROID_HOME"

# install what you need
yes | sdkmanager --licenses || :
echo y | sdkmanager "platforms;android-${ANDROID_API}"
echo y | sdkmanager "platform-tools"
echo y | sdkmanager "build-tools;28.0.3"
echo y | sdkmanager "extras;android;m2repository"
echo y | sdkmanager "extras;google;m2repository"
echo y | sdkmanager "system-images;android-${ANDROID_API};google_apis;x86_64"
echo y | sdkmanager "extras;intel;Hardware_Accelerated_Execution_Manager"
echo y | sdkmanager "extras;google;google_play_services"
echo no | avdmanager create avd --force --name Nexus_5X_API_${ANDROID_API}  --abi x86_64 --device "Nexus 5X" -k "system-images;android-${ANDROID_API};google_apis;x86_64"
fi