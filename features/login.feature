Feature: Login

  Scenario: User fails to login due to incorrect password
    Given User is on the login page
    When User enters a correct email and incorrect password
    And User clicks the "Login" button
    Then User should see an error message indicating incorrect password

  Scenario: User successfully logs in
    Given User is on the login page
    When User enters a correct email and password
    And User clicks the "Login" button
    Then User should be redirected to the dashboard