Feature: HomePage

  Scenario: TC-001 Verify user can navigate to the Pricing page from the header
    Given I am on the "Home" page
    When I click on the "Pricing" header link
    Then I should see the "/pricing" in the URL
    And I should see the "Pricing" header

  Scenario: TC-004 Verify cookie banner appears and can be accepted
    Given I am on the "Home" page
    Then I should see the "cookie banner" element visible
    When I click the "Accept cookie" button
    Then I should not see the cookie banner

  Scenario: TC-008 Verify "Call your agent" button scrolls to the interactive tool demo section
    Given I am on the "Home" page
    When I click the "Call your agent" button
    Then I should see the page autoscroll to the "interactive-tool-demo" section 
    And I should see the "#interactive-tool-demo" in the URL

  Scenario: TC-009 Verify that the “Text to Speech” tab works correctly
    Given I am on the "Home" page
    And I scroll down to the AI features section
    And I should see all three AI feature tabs visible
    When I click on the “Text to Speech” tab
    Then I should see the content update to display the “Text to Speech” feature details
    
  Scenario: TC-016 Verify that the “Text to Speech” audio can be played
    Given I am on the "Home" page
    And I should see “Text to Speech” tab in AI section is chosen
    When I enter random text into the text input field
    And I should see the entered text appear correctly in the input field without formatting errors
    When I click the “Play Audio” button
    Then I should see the audio playback start successfully