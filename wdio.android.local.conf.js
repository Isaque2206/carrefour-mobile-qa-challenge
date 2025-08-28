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
    platformName: 'Android',
    'appium:automationName': 'UiAutomator2',
    'appium:deviceName': 'Android Emulator',
    'appium:platformVersion': process.env.ANDROID_VERSION || '13',
    'appium:app': process.env.ANDROID_APP || './apps/native-demo-app-android.apk',
    'appium:autoGrantPermissions': true,
    'appium:newCommandTimeout': 240
  }]
};
