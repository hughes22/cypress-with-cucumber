Feature: Conduit Login Functionality

  Scenario: Login and logout with Valid Credentials
    Given User is on the login page
    When User login with valid Credentials
    And User click on the settings
    And User click on the logout button
    Then User should be routed back to login page
