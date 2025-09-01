const path = require('path');
const appPath = path.resolve(__dirname, 'apps', 'native-demo-app-android.apk');

exports.config = {
  runner: 'local',

  specs: ['./test/specs/**/*.spec.js'],

  maxInstances: 1,

  
  services: [
    ['appium', {
      args: {
        address: '127.0.0.1',
        port: 4723,
        basePath: '/'     
      }
    }]
  ],

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
   
    'appium:platformVersion': '13',

   
    'appium:app': process.env.APK_PATH || appPath,

  

    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'appium:noReset': true
  }],

  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  }
};
