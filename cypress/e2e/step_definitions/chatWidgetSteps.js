import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import chatWidgetPage from "../pages/ChatWidgetPage";

// TC-007 Verify that the chat/contact widget appears and functions correctly
Then('I should see a circular chat button in the bottom-right corner', () => {
    chatWidgetPage.verifyChatButtonVisible();
});

When('I click the chat button', () => {
    chatWidgetPage.openChat();
});

Then('I should see the chat widget open with a text input field', () => {
    chatWidgetPage.isElementVisible(chatWidgetPage.elements.chatInput);
});

Then('I should see a close icon inside the widget', () => {
    chatWidgetPage.isElementVisible(chatWidgetPage.elements.closeButton);
});

When('I click the close icon', () => {
    chatWidgetPage.closeChat();
});

Then('I should not see the chat widget window', () => {
    chatWidgetPage.elements.chatWindow().should('not.be.visible');
});