Feature: Chat widget

  Scenario: TC-007 Verify that the chat/contact widget appears and functions correctly
    Given I am on the "Home" page
    And I should see a circular chat button in the bottom-right corner
    When I click the chat button
    Then I should see the chat widget open with a text input field
    And I should see a close icon inside the widget
    When I click the close icon
    Then I should not see the chat widget window