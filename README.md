# Introduction 
Paymennt Assessment.

# Getting Started
Clone the repo to your local machine, and cd to the repo directory. Then:
1.	In the root directory, run "yarn install" to install node dependencies.
2.	In iOS directory, run "pod install" to install cocoapods for iOS.

# Build and Test
## iOS:
1. In the root directory, run "yarn start"
2. Open XCode and run the application on simulator or physical device.

## Android:
1. In the root directory, run "yarn start"
2. in android directory, run ./gradlew installDebug
3. In case of a physical device, run "adb reverse tcp:8081 tcp:8081"

# Environment and Versions:
The app run and tested on the following environment:
- Xcode: 15.0
- react-native-cli: 2.0.1
- ruby: 2.6.10p210
- cocopods: 1.13.0
- Android Studio: Electric Eel
- openjdk: 11.0.18 2023-01-17 LTS
- Gradle: 7.3.3
