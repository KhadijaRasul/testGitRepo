import { Config } from "protractor"
const HtmlReporter = require('protractor-jasmine2-html-reporter');
const { SpecReporter } = require('jasmine-spec-reporter');
import { browser } from 'protractor';

export let config: Config =
{
  framework: "jasmine",

  SELENIUM_PROMISE_MANAGER: false,

  ignoreUncaughtExceptions: true,

  capabilities:
  {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu',
        '--window-size=1920,1080',
        '--disable-dev-shm-usage'
      ],
    },
    loggingPrefs: {
      driver: 'ALL',
      server: 'ALL',
      browser: 'ALL'
    }
  },

  logLevel: 'DEBUG',

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screnshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      savePath: './/Test/reports',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true,
      fixedScreenshotName: true,
      cleanDestination: false,
      showPassed: false,
      fileName: 'MyReportName',
      fileNameSeparator:'_'
    }));
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    browser.waitForAngularEnabled(false);

    return browser.driver.manage().window().maximize();
  },
  specs: [
    'Test/Feature/Login/Specs/loginSpec.js'
  ],
  params:
      {
        protocol: 'http',
        domain: 'fiixdev.com:8080'
      },
  directConnect: true
};
