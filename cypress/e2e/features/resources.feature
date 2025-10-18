Feature: Resources

  Scenario: TC-006 Verify search bar returns results for a keyword
    Given I open the "Resources" page
    Then the URL should contain "/resources"
    When I click on the search icon
    And I enter "sms" in the search bar
    And I press Enter
    Then I should see search results related to "sms"
    And the URL should contain "/search?s=sms#articles"