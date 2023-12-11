///<reference types="Cypress"/>

describe("Traversing DOM elements in Cypress", () => {
  it.only("children() to get the children of DOM elements", () => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
   
  });
});
