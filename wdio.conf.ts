import type { Options } from '@wdio/types'
import * as dotenv from 'dotenv'
dotenv.config()

const isCI = process.env.CI === 'true' || !!process.env.GITHUB_ACTIONS

const ANDROID_APP = process.env.ANDROID_APP
const caps: WebdriverIO.Capabilities = {
  platformName: 'Android',
  'appium:automationName': 'UiAutomator2',
  'appium:deviceName': process.env.ANDROID_DEVICE_NAME ?? 'Android Emulator',
  'appium:platformVersion': process.env.ANDROID_PLATFORM_VERSION ?? '11.0',
  'appium:newCommandTimeout': 120,
  'appium:noReset': true,
}

if (ANDROID_APP && ANDROID_APP.trim().length > 0) {
  Object.assign(caps, {
    'appium:app': ANDROID_APP,
    'appium:autoGrantPermissions': true,
  })
} else {
  Object.assign(caps, {
    'appium:appPackage': process.env.ANDROID_APP_PACKAGE ?? 'com.google.android.calculator',
    'appium:appActivity': process.env.ANDROID_APP_ACTIVITY ?? 'com.android.calculator2.Calculator',
  })
}

export const config: Options.Testrunner = {
  runner: 'local',
  specs: ['./tests/specs/**/*.ts'],
  maxInstances: 1,

  framework: 'mocha',
  mochaOpts: {
    timeout: 120000
  },

  logLevel: isCI ? 'warn' : 'info',
  reporters: [
    'spec',
    ['allure', {
      outputDir: 'allure-results',
      disableWebdriverScreenshotsReporting: false,
    }]
  ],

  services: [
    ['appium', {
      args: {
        log: isCI ? null : undefined
      },
      command: 'appium'
    }]
  ],

  capabilities: [caps],

  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      transpileOnly: true,
      project: 'tsconfig.json'
    }
  },

  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,

  before: async () => {},

  afterTest: async (test, context, { passed }) => {
    if (!passed) {
      await browser.takeScreenshot()
    }
  }
}
