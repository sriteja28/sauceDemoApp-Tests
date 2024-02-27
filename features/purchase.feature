Feature: Purchase Product feature

  @purchase
  Scenario: Verify purchase functionality
    Given user navigate to the website "https://www.saucedemo.com/"
    And user enters "standard_user" into the input field "homepage.username"
    And user enters "secret_sauce" into the input field "homepage.password"
    And user will click the "homepage.login-button"
    Then user pause for "5000" ms