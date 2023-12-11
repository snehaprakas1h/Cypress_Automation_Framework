///<reference types="Cypress"/>

describe("Interact with dropdown lists via webdriver uni", () => {
    it("Select specific values via select dropdown lists", () => {
      //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      cy.visit("/");
      cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr", "target").click({ force: true });

      cy.get('#dropdowm-menu-1').select('c#');
      cy.get('#dropdowm-menu-2').select('testng').should('have.value','testng') //by value
      cy.get('#dropdowm-menu-3').select('JQuery').contains('JQuery'); // by text

      cy.get('#dropdowm-menu-2').select('maven').should('have.value','maven');
      cy.get('#dropdowm-menu-2').select('TestNG').contains('TestNG');
    });

  });
  