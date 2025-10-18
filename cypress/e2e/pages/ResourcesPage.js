import Page from './Page';

class ResourcesPage extends Page {
    url = "resources";
    elements = {
        searchInput: () => cy.get('input[name="search"]'),
        searchHeading: () => cy.get('h2.base-heading').eq(0),
        searchResults: () => cy.get('ul.grid li')
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