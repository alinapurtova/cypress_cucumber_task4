import Page from './Page';

class ContactUsPage extends Page {
    elements = {
        form: () => cy.get('div[title="Contact us"] form'),
        howCanWeHelp: () => cy.get('select[id*="Reason_for_Contact"]'),
        firstName: () => cy.get('input[id="FirstName"]'),
        lastName: () => cy.get('input[id="LastName"]'),
        businessEmail: () => cy.get('input[name="Email"]'),
        phoneNumber: () => cy.get('input[name*="Phone_Number"]'),
        companyWebsite: () => cy.get('input[name="Website"]'),
        hearAboutUs: () => cy.get('input[id*="How_did_you_hear"]')
    };

    verifyFormVisible() {
        this.isElementVisible(this.elements.form);
    }

    verifyRequiredFields() {
        Object.values(this.elements).forEach(fieldFn => {
            if (fieldFn !== this.elements.form) { 
                this.isElementVisible(fieldFn);
            }
        });
    }
}

export default new ContactUsPage();