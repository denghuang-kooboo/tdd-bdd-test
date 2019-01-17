const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const { url } = require('../../conf/default.conf').test_settings.default.globals;

Given('I open home page', function () {
  return client.url(url);
});

Then('{string} should show in result page', function (title) {
  console.log(title)
  return client.assert.visible('.sort-title')
});