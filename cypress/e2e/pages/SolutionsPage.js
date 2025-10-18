import Page from './Page';

class SolutionsPage extends Page {
  url = "solutions";
  solutionCardSelector = '#use-cases h3';

  elements = {
    searchInput: () => cy.get('input[placeholder*="Search"]', { timeout: 10000 }),
    solutionCards: () => cy.get(this.solutionCardSelector, { timeout: 10000 }),
  };

  open() {
    super.open(this.url);
  }

  verifyOnPage() {
    this.expectUrlIncludes(this.url);
  }

  verifySearchInputVisible() {
    this.isElementVisible(this.elements.searchInput);
  }

  enterKeyword(keyword) {
    this.elements.searchInput().as('search').clear();
    cy.get('@search').should('not.be.disabled').type(`${keyword}{enter}`);
  }

  verifyResultsContainKeyword(keyword) {
    cy.contains(this.solutionCardSelector, new RegExp(keyword, 'i'), { timeout: 10000 }).should('be.visible');
  }
}

export default new SolutionsPage();