Feature: Contact Us form

  Scenario: TC-005 Verify the Contact Us form is visible and functional
    Given I am on the "Home" page
    When I click on the "Contact Us" header link
    Then I should see the "/contact-us" in the URL
    And I should see the "Talk to an Expert" form with the following fields:
      | How can we help?      |
      | First name            |
      | Last name             |
      | Business email        |
      | Phone number          |
      | Company website       |
      | How did you hear about Telnyx? |