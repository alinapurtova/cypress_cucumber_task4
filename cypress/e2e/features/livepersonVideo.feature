Feature: Liveperson Customer Story video 

  Scenario: TC-010 Verify video playback functionality on the Liveperson Customer Story page
    Given I open the "Liveperson Customer Story" page
    Then the URL should contain "/customer-stories/liveperson"
    Then I should see the Vimeo video player visible on the page
    When I click on the video iframe
    Then the video player should respond to the click and remain visible