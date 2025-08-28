const { config } = require('./wdio.shared.conf');

exports.config = {
  ...config,

  services: [
    ['appium', {
      args: { address: '127.0.0.1', port: 4723 },
      command: 'appium'
    }]
  ],

  capabilities: [{
    platformName: 'iOS',
    'appium:automationName': 'XCUITest',
    'appium:deviceName': process.env.IOS_DEVICE || 'iPhone 15',
    'appium:platformVersion': process.env.IOS_VERSION || '17.5',
    'appium:app': process.env.IOS_APP || './apps/native-demo-app-ios.app',
    'appium:newCommandTimeout': 240
  }]
};
