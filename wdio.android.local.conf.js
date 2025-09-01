const path = require('path');
const appPath = path.resolve(__dirname, 'apps', 'native-demo-app-android.apk');

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,

  // Conecta no Appium iniciado pelo workflow
  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],

  // Appium é iniciado no YAML, então não usamos o service aqui
  services: [],

  capabilities: [{
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': '13',
    // Instala o app a partir do APK baixado na pipeline
    'appium:app': process.env.APK_PATH || appPath,
    // Não misture com appPackage/appActivity quando usar "app"
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240,
    'appium:noReset': false,
    'appium:adbExecTimeout': 120000
  }],

  mochaOpts: { ui: 'bdd', timeout: 600000 },
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3
};
