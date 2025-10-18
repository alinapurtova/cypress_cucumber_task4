import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import resourcesPage from "../pages/ResourcesPage";

// TC-006 Verify search bar returns results for a keyword
When('I click on the search icon', () => {
    resourcesPage.clickSearchIcon();
});

When('I enter {string} in the search bar', (keyword) => {
    resourcesPage.enterSearchText(keyword);
});

When('I press Enter', () => {
    resourcesPage.pressEnter();
});

Then('I should see search results related to {string}', (keyword) => {
    resourcesPage.verifySearchResultsVisible();
    resourcesPage.elements.searchResults().eq(0).invoke('text')
    .should('match', new RegExp(keyword, 'i')); 

});