Feature: RCS page

  Scenario: TC-014 Verify FAQ section functionality on the RCS page
    Given I open the "RCS Products" page
    Then the URL should contain "/products/rcs"
    And I should see the FAQ block visible on the page
    When I click on each available FAQ question
    Then each corresponding FAQ answer should become visible below its question