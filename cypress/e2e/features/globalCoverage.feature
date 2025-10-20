Feature: Global Coverage page

  Scenario: TC-011 Submit "Download full coverage" form with valid data
    Given I am on the "Global Coverage" page
    And I should see the "/global-coverage" in the URL
    When I locate the Download full coverage form
    And I enter valid data into the First Name, Last Name, and Company Email fields
    And I click the Submit button
    Then I should see the "/thank-you" in the URL
    And I should see the "Thank you." header

  Scenario: TC-012 Submit "Download full coverage" form with invalid email
    Given I am on the "Global Coverage" page
    And I should see the "/global-coverage" in the URL
    When I locate the Download full coverage form
    And I enter valid data into the First Name and Last Name fields
    And I enter an invalid email into the Company Email field
    And I click the Submit button
    Then I should see an error message under the Company Email field
    And I should see the form remains visible for correction

  Scenario: TC-015 Filtering Global Coverage table by country
    Given I am on the "Global Coverage" page
    And I should see the "/global-coverage" in the URL
    When I scroll to the "Global Number Coverage" block
    And I filter the table by "<country>"
    Then I should see only one row with data for "<country>" should be displayed

    Examples:
      | country |
      | Albania |
      | Angola  |