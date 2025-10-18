import Page from './Page';

class SignUpPage extends Page {
    url = "sign-up";
    elements = {
        signUpForm: () => cy.get('form[aria-label="signup-form"]'),
        companyEmail: () => cy.get('input[name="email"]'),
        firstName: () => cy.get('input[name="first_name"]'),
        lastName: () => cy.get('input[name="last_name"]'),
        password: () => cy.get('input[name="password"]'),
        policyCheckbox: () => cy.get('input[name="terms_and_conditions"]'),
        signUpButton: () => cy.get('div[data-action="signup"] ~ button'),
        errorMessageFor: (fieldName) => cy.get(`#${fieldName}_message`)
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