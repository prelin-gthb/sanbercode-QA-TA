Feature: Register

  Scenario: User successfully registers with valid data
    Given User navigates to the base URL
    When User clicks the "Ingin mencoba, Daftar?" button
    And User enters a valid store name, email, and password
    And User clicks the "Daftar" button
    Then User should be redirected to the login page

  Scenario: User sees an error message when registering with an already taken email
    Given User navigates to the base URL
    When User clicks the "Ingin mencoba, Daftar?" button
    And User enters a valid store name and an already taken email
    And User clicks the "Daftar" button
    Then User should see an error message indicating the email is already taken