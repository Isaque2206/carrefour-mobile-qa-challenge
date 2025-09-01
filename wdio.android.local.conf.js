const path = require('path');
const appPath = path.resolve(__dirname, 'apps', 'native-demo-app-android.apk');

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],

  
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],
  mochaOpts: { ui: 'bdd', timeout: 600000 },

  
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  
  capabilities: [{
    maxInstances: 1,                       // << só 1 worker de teste
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:udid': 'emulator-5554',       
    'appium:app': process.env.APK_PATH || appPath,
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'appium:noReset': false,
    'appium:adbExecTimeout': 120000
  }],

 
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: [] 
};
