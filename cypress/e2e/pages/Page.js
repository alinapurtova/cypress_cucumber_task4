export default class Page {
  open(path = '/') {
    cy.visit(path);
  }

  clickElement(element) {
    element().should('be.visible').click({ force: true });
  }

  typeText(element, text) {
    element().should('be.visible').clear().type(text, { delay: 10 });
  }

  isUrlContains(text, timeout = 10000) {
    cy.url({ timeout }).should('include', text);
  }

  isElementVisible(element, timeout = 10000) {
    element().should('be.visible', { timeout });
  }

  isElementNotVisible(element) {
    element().should('not.be.visible');
  }

  isErrorVisible(selector) {
    cy.get(selector).should('be.visible');
  }
}