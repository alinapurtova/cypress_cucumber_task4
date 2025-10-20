Feature: Sign Up form

  Scenario: TC-002 Verify that the Sign Up page opens correctly
    Given I am on the "Home" page
    When I click on the "Sign Up" header link
    Then I should see the "/sign-up" in the URL
    And I should see the registration form with required fields:
      | Company Email    |
      | First Name       |
      | Last Name        |
      | Password         |
      | Policy Checkbox  |

  Scenario: TC-003 Verify Sign Up form validation with empty submit
    Given I am on the "Sign Up" page
    When I click the "Sign Up" button without filling any fields
    Then I should see the "/sign-up" in the URL
    And I should see error messages under each required field:
      | Company Email    |
      | First Name       |
      | Last Name        |
      | Password         |
      | Policy Checkbox  |