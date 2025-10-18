Feature: Global Coverage page

  Scenario: TC-011 Submit "Download full coverage" form with valid data
    Given I open the "Global Coverage" page
    Then the URL should contain "/global-coverage"
    When I locate the Download full coverage form
    And I enter valid data into the First Name, Last Name, and Company Email fields
    And I click the Submit button
    Then the URL should contain "/thank-you"
    And the header should display "Thank you."

  Scenario: TC-012 Submit "Download full coverage" form with invalid email
    Given I open the "Global Coverage" page
    Then the URL should contain "/global-coverage"
    When I locate the Download full coverage form
    And I enter valid data into the First Name and Last Name fields
    And I enter an invalid email into the Company Email field
    And I click the Submit button
    Then I should see an error message under the Company Email field
    And the form should remain visible for correction

  Scenario: TC-015 Filtering Global Coverage table by country
    Given I open the "Global Coverage" page
    Then the URL should contain "/global-coverage"
    When I scroll to the "Global Number Coverage" block
    Then I should see the section visible and the Services button selected
    When I filter the table by "<country>"
    Then the table should contain only 1 row with data for "<country>"

    Examples:
      | country |
      | Albania |
      | Angola  |