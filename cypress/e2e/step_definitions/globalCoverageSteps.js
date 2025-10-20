import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import globalCoveragePage from "../pages/GlobalCoveragePage";
import { faker } from '@faker-js/faker';

let testData = {};

// TC-011 Submit "Download full coverage" form with valid data
When("I locate the Download full coverage form", () => {
  globalCoveragePage.isElementVisible(globalCoveragePage.elements.downloadForm);
});

When("I enter valid data into the First Name, Last Name, and Company Email fields", () => {
  testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email()
  };

  globalCoveragePage.fillDownloadForm(testData.firstName, testData.lastName, testData.email);
});

// TC-012 Submit "Download full coverage" form with invalid email
When('I enter valid data into the First Name and Last Name fields', () => {
  testData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  };

  globalCoveragePage.fillDownloadForm(testData.firstName, testData.lastName, " "); 
});

When('I enter an invalid email into the Company Email field', () => {
  testData.email = "invalid-email";
  globalCoveragePage.typeText(globalCoveragePage.elements.businessEmail, testData.email);
});

When("I click the Submit button", () => {
  globalCoveragePage.submitForm();
});

Then('I should see an error message under the Company Email field', () => {
  globalCoveragePage.verifyEmailError();
});

Then('I should see the form remains visible for correction', () => {
  globalCoveragePage.verifyFormVisible();
});

// TC-015 Filtering Global Coverage table by country
When('I scroll to the "Global Number Coverage" block', () => {
  globalCoveragePage.scrollToCoverageSection();
});

Then('I should see the section visible and the Services button selected', () => {
  globalCoveragePage.verifySectionAndButton();
});

When('I filter the table by {string}', (country) => {
  globalCoveragePage.filterByCountry(country);
});

Then('I should see only one row with data for {string} should be displayed', (country) => {
  globalCoveragePage.verifyFilteredTable(country);
});