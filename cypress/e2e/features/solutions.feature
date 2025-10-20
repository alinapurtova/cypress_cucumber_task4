Feature: Solutions page

  Scenario: TC-013 Verify search functionality on the “All Solutions” page on Telnyx
    Given I am on the "All Solutions" page
    And I should see the "/solutions" in the URL
    When I enter "<keyword>" into the search field and press Enter
    Then I should see all visible solution titles with "<keyword>"

    Examples:
      | keyword |
      | IoT     |
      | sms     |