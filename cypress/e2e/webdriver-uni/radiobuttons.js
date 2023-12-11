///<reference types="Cypress"/>

describe("Handle radio buttons", () => {
  before(() => {
    cy.visit("/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Verify radio buttons", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked'); //limiting scope of radio buttons
    //cy.get('#radio-buttons').find("[type='radio']").first().check();

    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it.only("Validate states of specific radio button", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("[value='lettuce").should("not.be.checked");

    cy.get("[value='pumpkin").should("be.checked");

    cy.get("[value='cabbage").should("be.disabled");
  });
});
