Feature: Chat widget

  Scenario: TC-007 Verify that the chat/contact widget appears and functions correctly
    Given I open the "Home" page
    Then I should see a circular chat button in the bottom-right corner
    When I click the chat button
    Then the chat widget should open with a visible text input field
    And I should see a close icon inside the widget
    When I click the close icon
    Then the chat widget should close and disappear from view