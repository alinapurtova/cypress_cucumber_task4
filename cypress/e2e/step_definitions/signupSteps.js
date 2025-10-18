import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import signUpPage from "../pages/SignUpPage";

// TC-002 Verify that the Sign Up page opens correctly
Then('I should see the registration form with required fields:', () => {
  signUpPage.isElementVisible(signUpPage.elements.signUpForm);
  signUpPage.verifyRequiredFields();
});

// TC-003 Verify Sign Up form validation with empty submit
When('I click the "Sign Up" button without filling any fields', () => {
  signUpPage.submitEmptyForm();
});

Then('I should see error messages under each required field:', () => {
  const requiredFields = [
    signUpPage.elements.companyEmail,
    signUpPage.elements.firstName,
    signUpPage.elements.lastName,
    signUpPage.elements.password,
    signUpPage.elements.policyCheckbox
  ];
  requiredFields.forEach(field => {
    signUpPage.verifyErrorForField(field);
  });
});
