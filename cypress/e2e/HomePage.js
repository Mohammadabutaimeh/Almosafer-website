/// <reference types= "cypress" />

describe('This is to check the home page tabs', () => {
    it('this is to check the website defualt language is Arabic', () => {
        cy.visit("https://www.almosafer.com/ar");
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="Header__LanguageSwitch"]').should('include.text', 'English');
    });
    it('this is to check the website defualt currency is saudi riyal (SAR)', () => {
        cy.visit("https://www.almosafer.com/ar");
        cy.get('.cta__saudi').click();
        cy.get('[data-testid="Header__CurrencySelector"]').should('include.text', 'SAR');
    });
    it('this is to check if tab flight is the default tab on main tabs block ', () => {
        cy.visit("https://www.almosafer.com/ar");
        cy.get('.cta__saudi').click();
        cy.get('#uncontrolled-tab-example-tab-flights').should('have.class', 'active');
    });
});











