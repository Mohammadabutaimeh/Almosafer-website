
/// <reference types= "cypress" />

describe('This is to check the home page tabs', () => {
  it('This is to check hotels tab', () => {
    let websites = [
      'https://www.almosafer.com/ar',
      'https://www.almosafer.com/en'
    ];
    let randomWebsite = websites[Math.floor(Math.random() * websites.length)];
    cy.visit(randomWebsite);
  
    cy.get('.cta__saudi').click();
    cy.wait(2000);

    cy.get('#uncontrolled-tab-example-tab-hotels').click();

    cy.get('[data-testid="Header__LanguageSwitch"]').invoke('text').then((language) => {
      let destination;
      if (language.includes('العربية')) {
        let destinationsEN = ['Dubai', 'Jeddah', 'Riyadh'];
        destination = destinationsEN[Math.floor(Math.random() * destinationsEN.length)];
      } else if (language.includes('English')) {
        let destinationsAR = ['دبي', 'جدة'];
        destination = destinationsAR[Math.floor(Math.random() * destinationsAR.length)];
      }
      cy.get('[data-testid="AutoCompleteInput"]').type(destination);

      cy.get('[data-testid="AutoCompleteResultsList"]').should('be.visible');
      cy.get('[data-testid="AutoCompleteResultItem0"]').click();

      let roomOptions = ['A', 'B'];
      let selectedOption = roomOptions[Math.floor(Math.random() * roomOptions.length)];
      cy.get('[data-testid="HotelSearchBox__ReservationSelect_Select"]').select(selectedOption);

      cy.get('[data-testid="HotelSearchBox__SearchButton"]').click();

 });
  });
});
