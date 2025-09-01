const path = require('path');
const appPath = path.resolve(__dirname, 'app.apk'); // a pipeline salva aqui

exports.config = {
  runner: 'local',
  specs: ['./test/specs/**/*.spec.js'],

  logLevel: 'warn',
  framework: 'mocha',
  reporters: [
    'spec',
    ['allure', { outputDir: 'allure-results', disableWebdriverStepsReporting: true }]
  ],
  mochaOpts: { ui: 'bdd', timeout: 600000 },

  /**
   * MUITO IMPORTANTE: limita a 1 worker total.
   * (WDIO ainda vai listar 4 specs, mas executa uma por vez.)
   */
  maxInstances: 1,

  hostname: '127.0.0.1',
  port: 4723,
  path: '/',

  waitforTimeout: 20000,
  connectionRetryTimeout: 240000, // 4 min para criação de sessão em CI
  connectionRetryCount: 3,

  capabilities: [
    {
      maxInstances: 1,                   // por garantia, também aqui
      platformName: 'Android',
      'appium:automationName': 'UiAutomator2',
      'appium:deviceName': 'Android Emulator',
      // não force versão; o AVD é Android 11 (API 30)
      // 'appium:platformVersion': '11',
      'appium:udid': 'emulator-5554',    // casa com o AVD criado pelo workflow
      'appium:app': process.env.APK_PATH || appPath,
      'appium:autoGrantPermissions': true,
      'appium:newCommandTimeout': 240,
      'appium:noReset': false,
      'appium:adbExecTimeout': 120000
    }
  ],

  services: [] // Appium já é iniciado pela pipeline
};
