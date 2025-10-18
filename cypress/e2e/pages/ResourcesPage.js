import Page from './Page';

class ResourcesPage extends Page {
    url = "resources";
    elements = {
        searchInput: () => cy.get('input[name="search"]', { timeout: 10000 }),
        searchHeading: () => cy.get('h2.base-heading', { timeout: 10000 }).eq(0),
        searchResults: () => cy.get('ul.grid li', { timeout: 10000 })
    };

    open() {
        super.open(this.url);
    }

    clickSearchIcon() {
        this.clickElement(this.elements.searchInput);
    }

    enterSearchText(text) {
        this.typeText(this.elements.searchInput, text);
    }

    pressEnter() {
        this.elements.searchInput().type('{enter}');
    }

    verifySearchResultsVisible() {
        this.isElementVisible(this.elements.searchResults);
    }

    isUrlContains(text) {
        this.expectUrlIncludes(text);
    }
}

export default new ResourcesPage();