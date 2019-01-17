Feature: 卡片列表页面 添加排序功能
  1. 页面加载后要显示排序列表
  1) 标题： “排序”
  2) 列表： 时间升序、时间降序、价格升序
  2. 点击排序选项，卡片会做相应的排序

  Scenario: 显示“排序”标题
    Given 在卡片列表页面
    When 页面加载完成
    Then 标题"排序"要正常显示

  Scenario: 默认排序
    Given 在卡片列表页面
    When 页面加载完成
    Then "时间降序"选项被选中
    And 卡片默认按照"时间降序"排列

  Scenario Outline: 显示排序列表
    Given 在卡片列表页面
    When 页面加载完成
    Then 可以看到<sortOption>排序列表选项

  Scenario Outline: 用户点击排序选项
    Given 在卡片列表页面
    When 用户点击<sortOption>
    Then <sortOption>被选中
    And 卡片按照<sortOption>排列

    Examples:
      | sortOption |
      | 时间升序       |
      | 时间降序       |
      | 价格升序       |
