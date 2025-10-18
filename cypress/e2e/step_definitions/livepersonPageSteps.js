import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import livepersonStoryPage from "../pages/LivepersonStoryPage";

// TC-010 Verify video playback functionality on the Liveperson Customer Story page
Then("I should see the Vimeo video player visible on the page", () => {
  livepersonStoryPage.verifyVideoPlayerVisible();
});

When("I click on the video iframe", () => {
  livepersonStoryPage.clickVideoPlayer();
});

Then("the video player should respond to the click and remain visible", () => {
  livepersonStoryPage.verifyVideoPlayerVisible();
});