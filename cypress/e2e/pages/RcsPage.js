import Page from "./Page";

class RcsPage extends Page {
    url = "products/rcs";

    elements = {
        faqBlock: () => cy.get('section.pt-xxl.bg-transparent').should('exist'),
        faqQuestions: () => cy.get('section.pt-xxl.bg-transparent button'),
        faqAnswers: () => cy.get('section.pt-xxl.bg-transparent p'),
    };

    open() {
        super.open(this.url);
    }

    verifyFaqBlockVisible() {
        this.isElementVisible(this.elements.faqBlock);
    }

    verifyFaqQuestionsVisible() {
        this.isElementVisible(this.elements.faqQuestions);
    }

    clickAllFaqQuestionsAndVerifyAnswers() {
        const questions = this.elements.faqQuestions();
        this.elements.faqAnswers().first().should('not.have.class', 'hidden');
        questions.each(($question, index) => {
            if (index === 0) return;

            cy.wrap($question).click();

            this.elements.faqAnswers()
                .each(($answer) => {
                    cy.wrap($answer).then(($el) => {
                        if ($el.hasClass('hidden')) {
                            expect($el).to.have.class('hidden');
                        } else {
                            expect($el).not.to.have.class('hidden');
                        }
                    });
                });
        });
    }
}

export default new RcsPage();