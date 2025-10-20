Feature: Resources

  Scenario: TC-006 Verify search bar returns results for a keyword
    Given I am on the "Resources" page
    And I should see the "/resources" in the URL
    When I click on the search icon
    And I enter "sms" in the search bar
    And I press Enter
    Then I should see search results related to "sms"
    And I should see the "/search?s=sms#articles" in the URL