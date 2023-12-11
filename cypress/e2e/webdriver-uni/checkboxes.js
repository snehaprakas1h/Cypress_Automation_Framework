///<reference types="Cypress"/>

describe("Handle checkboxes", () => {
  beforeEach(() => {
    cy.log(Cypress.env("name"));
    cy.navigateTo_WebdriverUni_checkboxpage();
  });
  it(
    "Verify checkboxes",
    {
      retries: {
        runMode: 2,
        openMode: 2,
      },
    },
    () => {
      //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
      //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
      cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
      cy.get("@option-1").check();
      cy.get("@option-1").check().should("be.checked");
    }
  );

  it("Verify unchecking checkboxes", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
    cy.get(":nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Verify multiple checkboxes", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    //cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked');
    cy.get("input[type='checkbox']").as("checkboxes");
    cy.get("@checkboxes").check();
    cy.get("@checkboxes").check().should("be.checked");
  });
});
