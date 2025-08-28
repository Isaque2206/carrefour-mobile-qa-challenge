const { join } = require('node:path');

exports.config = {
  specs: ['./test/specs/**/*.spec.js'],
  maxInstances: 1,

  framework: 'mocha',
  mochaOpts: { timeout: 120000 },
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverStepsReporting: false,
      disableWebdriverScreenshotsReporting: false
    }]
  ],

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    if (!passed) {
      await driver.saveScreenshot(join(process.cwd(), 'allure-results', `FAIL_${Date.now()}.png`));
    }
  }
};
