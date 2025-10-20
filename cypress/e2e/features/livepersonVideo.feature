Feature: Liveperson Customer Story video 

  Scenario: TC-010 Verify video playback functionality on the Liveperson Customer Story page
    Given I am on the "Liveperson Customer Story" page
    Then I should see the "/customer-stories/liveperson" in the URL
    And I should see the Vimeo video player visible on the page
    When I click on the video iframe
    Then I should see the video player respond to the click and remain visible