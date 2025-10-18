Feature: HomePage

  Scenario: TC-001 Verify user can navigate to the Pricing page from the header
    Given I open the "Home" page
    When I click on the "Pricing" header link
    Then the URL should contain "/pricing"
    And the header should display "Pricing"

  Scenario: TC-004 Verify cookie banner appears and can be accepted
    Given I open the "Home" page
    Then I should see the "cookie banner" element visible
    When I click the "Accept cookie" button
    Then the cookie banner should disappear

  Scenario: TC-008 Verify "Call your agent" button scrolls to the interactive tool demo section
    Given I open the "Home" page
    When I click the "Call your agent" button
    Then the page autoscroll to the "interactive-tool-demo" section should be visible on the screen
    And the URL should contain "#interactive-tool-demo"

  Scenario: TC-009 Verify that the “Text to Speech” feature works correctly with valid data
    Given I open the "Home" page
    When I scroll down to the AI features section
    Then I should see all three AI feature tabs visible
    When I click on the “Text to Speech” tab
    Then the content should update to display the “Text to Speech” feature details
    When I enter random text into the text input field
    Then the entered text should appear correctly in the input field without formatting errors
    When I click the “Play Audio” button
    Then the audio playback should start successfully