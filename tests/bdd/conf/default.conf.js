const nightwatchCucumber = require('nightwatch-cucumber');
const chromedriverPath = require('chromedriver').path;
const geckodriverPath = require('geckodriver').path;
const seleniumServerPath = require('selenium-server').path;

nightwatchCucumber({
  cucumberArgs: ['--require', 'tests/bdd/features/step-definitions','--format', 'node_modules/cucumber-pretty', '--format', 'json:test/bdd/reports/cucumber.json', 'tests/bdd/features']
});

module.exports = {
  output_folder: 'tests/bdd/reports',
  custom_assertions_path: ['tests/bdd/custom-assertions'],
  selenium: {
    start_process: true,
    server_path: seleniumServerPath,
    cli_args: {
      'webdriver.chrome.driver': chromedriverPath,
      'webdriver.gecko.driver': geckodriverPath,
    },
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:8081',
      globals: {
        url: 'http://localhost:8081',
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['incognito', 'headless', 'no-sandbox', 'disable-gpu']
        }
      },
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriverPath
        }
      }
    }
  },
  chrome: {
    desiredCapabilities: {
      browserName: 'chrome',
      javascriptEnabled: true,
      acceptSslCerts: true
    },
    selenium: {
      cli_args: {
        'webdriver.chrome.driver': chromedriverPath
      }
    }
  }
};