import Page from "./Page";

class GlobalCoveragePage extends Page {
    url = "global-coverage";
    elements = {
        downloadForm: () => cy.get('div[title*="Form"] form'),
        firstName: () => cy.get('input[id="FirstName"]'),
        lastName: () => cy.get('input[id="LastName"]'),
        businessEmail: () => cy.get('input[name="Email"]'),
        submitButton: () => cy.get('button[type="submit"]'),
        thankYouHeader: () => cy.get('h1'),
        emailError: () => cy.get('div.mktoError'),
        sectionCoverage: () => cy.get('section#our-global-coverage'),
        servicesButton: () => cy.get('button[id*="services"]'),
        servicesTable: () => cy.get('div[id*="services"] table'),
        filterButton: () => cy.get('div[id*="services"] button[aria-haspopup="menu"]').eq(0),
        countryOption: (country) => cy.get(`input[name="${country}"]`),
        tableRows: () => cy.get('div[id*="services"] table tbody tr')
    };

    open() {
        super.open(this.url);
    }

    fillDownloadForm(firstName, lastName, email) {
        this.typeText(this.elements.firstName, firstName);
        this.typeText(this.elements.lastName, lastName);
        this.typeText(this.elements.businessEmail, email);
    }

    submitForm() {
        this.clickElement(this.elements.submitButton);
    }

    verifyThankYouPage() {
        this.expectUrlIncludes("thank-you");
        this.elements.thankYouHeader().should("contain.text", "Thank you");
    }

    verifyEmailError() {
        this.isElementVisible(this.elements.emailError);
    }

    verifyFormVisible() {
        this.isElementVisible(this.elements.downloadForm);
    }

    scrollToCoverageSection() {
        this.elements.sectionCoverage().scrollIntoView().should('be.visible');
    }

    verifySectionAndButton() {
        this.isElementVisible(this.elements.sectionCoverage);
        this.elements.servicesButton().should('have.attr', 'aria-selected', 'true');
        this.isElementVisible(this.elements.servicesTable);
    }

    filterByCountry(country) {
        this.clickElement(this.elements.filterButton);
        this.elements.countryOption(country).click({ force: true });
        this.clickElement(this.elements.filterButton);
        cy.wait(1000);
    }

    verifyFilteredTable(country) {
        this.elements.tableRows().should('have.length', 1);
        this.elements.tableRows().first().should('contain.text', country);
    }
}

export default new GlobalCoveragePage();