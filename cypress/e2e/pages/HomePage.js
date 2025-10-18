import Page from './Page';

class HomePage extends Page {
  elements = {
    pricingLink: () => cy.get('a[href="/pricing"] button'),
    signUpButton: () => cy.get('header a[href="/sign-up"]'),
    contactUsLink: () => cy.get('header a[href*="contact"]').eq(1),

    cookieBanner: () => cy.get('#onetrust-banner-sdk > div', { timeout: 10000 }),
    cookieAcceptButton: () => cy.get('#onetrust-accept-btn-handler', { timeout: 10000 }),

    callYourAgentButton: () => cy.get('a[href="#interactive-tool-demo"]', { timeout: 10000 }),
    interactiveDemoSection: () => cy.get('div[id*="content-hd-voice-ai"]', { timeout: 10000 }),

    aiSection: () => cy.get('#interactive-tool-demo', { timeout: 10000 }),
    aiTabSpeechToText: () => cy.get('button[aria-label="Speech to text"]', { timeout: 10000 }),
    aiTabHdVoice: () => cy.get('button[aria-label="HD Voice AI"]', { timeout: 10000 }),
    aiTabTextToSpeech: () => cy.get('button[aria-label="Text to speech"]', { timeout: 10000 }),
    aiTextToSpeechContent: () => cy.get('div[id*="content-text-to-speech"]', { timeout: 10000 }),
    textToSpeechInput: () => cy.get("#text-to-speech-textarea", { timeout: 10000 }),
    playAudioButton: () => cy.get('button[aria-label*="audio"]', { timeout: 10000 }).eq(0),
    headerTitle: () => cy.get('main h1', { timeout: 10000 }),
  };

  open() {
    super.open('');
  }

  clickHeaderLink(linkName) {
    const links = {
      "Pricing": this.elements.pricingLink,
      "Sign Up": this.elements.signUpButton,
      "Contact Us": this.elements.contactUsLink,
    };

    const link = links[linkName];
    if (!link) throw new Error(`Link "${linkName}" is not defined in HomePage`);
    this.clickElement(link);
  }

  acceptCookies() {
    this.elements.cookieAcceptButton().click({ force: true });
  }

  verifyBannerNotVisible() {
    this.isElementNotVisible(this.elements.cookieBanner);
  }

  clickCallYourAgentButton() {
    this.clickElement(this.elements.callYourAgentButton);
  }

  verifyInteractiveDemoVisible() {
    this.isElementVisible(this.elements.interactiveDemoSection);
  }

  typeTextToSpeech(message) {
    this.typeText(this.elements.textToSpeechInput, message);
    this.elements.textToSpeechInput().should("have.value", message);
  }

  playAudio() {
    this.elements.playAudioButton().should('have.attr', 'aria-label', 'Play audio').click();
    this.clickElement(this.elements.playAudioButton);
  }

  getHeaderTitleText() {
    return this.elements.headerTitle().invoke('text');
  }

  areAiTabsVisible() {
    this.isElementVisible(this.elements.aiTabSpeechToText);
    this.isElementVisible(this.elements.aiTabHdVoice);
    this.isElementVisible(this.elements.aiTabTextToSpeech);
  }
}

export default new HomePage();