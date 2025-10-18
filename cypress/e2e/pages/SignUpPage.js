import Page from './Page';

class SignUpPage extends Page {
    url = "sign-up";
    elements = {
        signUpForm: () => cy.get('form[aria-label="signup-form"]', { timeout: 10000 }),
        companyEmail: () => cy.get('input[name="email"]', { timeout: 10000 }),
        firstName: () => cy.get('input[name="first_name"]', { timeout: 10000 }),
        lastName: () => cy.get('input[name="last_name"]', { timeout: 10000 }),
        password: () => cy.get('input[name="password"]', { timeout: 10000 }),
        policyCheckbox: () => cy.get('input[name="terms_and_conditions"]', { timeout: 10000 }),
        signUpButton: () => cy.get('div[data-action="signup"] ~ button', { timeout: 10000 }),
        errorMessageFor: (fieldName) => cy.get(`#${fieldName}_message`, { timeout: 10000 })
    };

    open() {
        super.open(this.url);
    }

    verifyOnPage() {
        this.expectUrlIncludes(this.url);
    }

    verifyRequiredFields() {
        const requiredFields = [
            this.elements.companyEmail,
            this.elements.firstName,
            this.elements.lastName,
            this.elements.password,
            this.elements.policyCheckbox
        ];

        requiredFields.forEach((field) => {
            this.isElementVisible(field);
        });
    }

    submitEmptyForm() {
        this.clickElement(this.elements.signUpButton);
    }

    verifyErrorForField(fieldElement) {
        fieldElement().then($el => {
            const id = $el.attr('id');
            this.isErrorVisible(`#${id}_message`);
        });
    }
}

export default new SignUpPage();