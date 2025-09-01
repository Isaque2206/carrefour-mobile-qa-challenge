
const path = require('path');
const appPath = path.resolve(__dirname, 'apps', 'native-demo-app-android.apk'); 

exports.config = {
  // ...
  specs: ['./test/specs/**/*.spec.js'],

  services: [
    ['appium', {
      args: {
        address: '127.0.0.1',
        port: 4723,
        basePath: '/'
      }
    }]
  ],

 capabilities: [{
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': 'Android Emulator',
  'appium:platformVersion': '13',
  'appium:noReset': true,
  'appium:appPackage': 'com.wdiodemoapp',
  'appium:appActivity': 'com.wdiodemoapp.MainActivity',
}],

  maxInstances: 1
};
