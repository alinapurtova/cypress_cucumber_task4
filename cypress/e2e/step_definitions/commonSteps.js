import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import homePage from "../pages/HomePage";
import chatWidgetPage from "../pages/ChatWidgetPage";
import globalCoveragePage from "../pages/GlobalCoveragePage";
import livepersonStoryPage from "../pages/LivepersonStoryPage";
import rcsPage from "../pages/RcsPage";
import resourcesPage from "../pages/ResourcesPage";
import signUpPage from "../pages/SignUpPage";
import solutionsPage from "../pages/SolutionsPage";

Given('I am on the {string} page', (pageName) => {
  const pages = {
    'Home': homePage,
    'Sign Up': signUpPage,
    'Resources': resourcesPage,
    'Global Coverage': globalCoveragePage,
    'RCS Products': rcsPage,
    'Liveperson Customer Story': livepersonStoryPage,
    'All Solutions': solutionsPage
  };
  pages[pageName].open();
});

Then('I should see the {string} in the URL', (text) => {
  homePage.isUrlContains(text);
});

Then('I should see the {string} element visible', (elementName) => {
  const map = {
    'cookie banner': homePage.elements.cookieBanner,
    'chat button': chatWidgetPage.elements.chatButton,
    'text-to-speech section': homePage.elements.aiTextToSpeechContent,
  };
  map[elementName]().should('be.visible');
});

When('I click on the {string} header link', (linkName) => {
  homePage.clickHeaderLink(linkName);
});

Then('I should see the {string} header', (header) => {
  homePage.getHeaderTitleText().should('eq', header);
});