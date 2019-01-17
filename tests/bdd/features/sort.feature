Feature: Sort function
  In order to show result page by order, we need to provide order function for users to sort the result page

Scenario: show sort sidebar in result page
  Given I open home page
  Then "detault sort title" should show in result page
