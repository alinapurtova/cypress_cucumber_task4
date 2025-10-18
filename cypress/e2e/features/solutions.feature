Feature: Solutions page

  Scenario: TC-013 Verify search functionality on the “All Solutions” page on Telnyx
    Given I open the "All Solutions" page
    Then the URL should contain "/solutions"
    When I enter "<keyword>" into the search field and press Enter
    Then all visible solution titles should contain "<keyword>"

    Examples:
      | keyword |
      | IoT     |
      | sms     |