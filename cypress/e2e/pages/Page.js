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

  isUrlContains(text) {
    cy.url().should('include', text);
  }

  isElementVisible(element) {
    element().should('be.visible');
  }

  isElementNotVisible(element) {
    element().should('not.be.visible');
  }

  isErrorVisible(selector) {
    cy.get(selector).should('be.visible');
  }
}