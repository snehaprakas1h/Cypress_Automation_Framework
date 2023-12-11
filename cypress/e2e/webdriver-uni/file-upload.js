///<reference types="Cypress"/>

describe("File upload via web driver university", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("verify and assert upload a file", () => {
    cy.get("#myFile").selectFile(
      "C://Users//sneha//Desktop//Cypress//Cypress_Automation_Framework//cypress//fixtures//laptop.png"
    );
    cy.get("#submit-button").click();
  });

  it("verify and assert upload no file", () => {
    cy.get("#submit-button").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("You need to select a file to upload!");
      return true;
    });
  });
});
