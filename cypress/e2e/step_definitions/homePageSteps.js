import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/HomePage";
import { faker } from "@faker-js/faker";


//TC-004: Verify cookie banner appears and can be accepted
Then("I should see the cookie banner", () => {
  homePage.verifyBannerVisible();
});

When('I click the "Accept cookie" button', () => {
  homePage.acceptCookies();
});

Then("the cookie banner should disappear", () => {
  homePage.verifyBannerNotVisible();
});


// TC-008 Verify "Call your agent" button scrolls to the interactive tool demo section
When('I click the "Call your agent" button', () => {
  homePage.clickCallYourAgentButton();
});

Then('the page autoscroll to the "interactive-tool-demo" section should be visible on the screen', () => {
  homePage.verifyInteractiveDemoVisible();
});


// TC-009 Verify that the “Text to Speech” feature works correctly with valid data
When('I scroll down to the AI features section', () => {
  homePage.elements.aiSection().scrollIntoView();
  homePage.isElementVisible(homePage.elements.aiSection);
});

Then("I should see all three AI feature tabs visible", () => {
  homePage.areAiTabsVisible();
});

When('I click on the “Text to Speech” tab', () => {
  homePage.clickElement(homePage.elements.aiTabTextToSpeech);
});

Then('the content should update to display the “Text to Speech” feature details', () => {
  homePage.isElementVisible(homePage.elements.aiTextToSpeechContent);
});

When('I enter random text into the text input field', () => {
  randomText = faker.lorem.sentence();
  homePage.typeTextToSpeech(randomText);
});

Then("the entered text should appear correctly in the input field without formatting errors", () => {
  homePage.elements.textToSpeechInput().should("have.value", randomText);
});

When('I click the “Play Audio” button', () => {
  homePage.playAudio();
});

Then("the audio playback should start successfully", () => {
  homePage.elements.playAudioButton().should("have.attr", "aria-label", "Stop audio");
});