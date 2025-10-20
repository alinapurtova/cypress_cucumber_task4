Feature: RCS page

  Scenario: TC-014 Verify FAQ section functionality on the RCS page
    Given I am on the "RCS Products" page
    And I should see the "/products/rcs" in the URL
    And I should see the FAQ block visible on the page
    When I click on each available FAQ question
    Then I should see each corresponding FAQ answer become visible below its question