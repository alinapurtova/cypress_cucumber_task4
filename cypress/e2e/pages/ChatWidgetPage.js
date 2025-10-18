import Page from './Page';

class ChatWidgetPage extends Page {
    elements = {
        chatButton: () => cy.get('button.relative.rounded-full', { includeShadowDom: true }),
        chatWindow: () => cy.get('div.rounded-xl.fixed', { includeShadowDom: true }),
        chatInput: () => cy.get('#user-message-input', { includeShadowDom: true }),
        closeButton: () => cy.get('span.cursor-pointer', { includeShadowDom: true }),
    };

    verifyChatButtonVisible() {
        this.isElementVisible(this.elements.chatButton, 20000);
    }

    openChat() {
        this.clickElement(this.elements.chatButton);
        this.isElementVisible(this.elements.chatWindow);
        this.isElementVisible(this.elements.chatInput);
        this.isElementVisible(this.elements.closeButton);
    }

    closeChat() {
        this.clickElement(this.elements.closeButton);
        this.isElementNotVisible(this.elements.chatWindow);
    }
}

export default new ChatWidgetPage();
