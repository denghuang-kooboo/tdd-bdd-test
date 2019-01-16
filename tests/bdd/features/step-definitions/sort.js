const { client } = require('nightwatch-cucumber');
const { defineSupportCode } = require('cucumber');

const { url } = require('../../conf/default.conf').test_settings.default.globals;

Given('I open home page', function () {
  client.url(url);
});

Then('"detault sort title" should show in result page', function (title) {
  client.expect.element('.sort-title').to.be.visible
});