const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

const { url } = require('../../conf/default.conf').test_settings.default.globals;

Given('在卡片列表页面', function () {
  return client.url(url);
});

When('页面加载完成', function () {
  return client.assert.visible('.sort-title')
});

Then('标题{string}要正常显示', function (string) {
  return client.expect.element('.sort-title').text.to.equal(string)
});

Then('{string}选项被选中', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('卡片默认按照{string}排列', function (string) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('用户点击时间升序', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('时间升序被选中', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('卡片按照时间升序排列', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('用户点击时间降序', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('时间降序被选中', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('卡片按照时间降序排列', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('用户点击价格升序', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('价格升序被选中', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('卡片按照价格升序排列', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});