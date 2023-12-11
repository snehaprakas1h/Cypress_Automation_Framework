///<reference types="Cypress"/>

describe("Verifying variables, cypress commands and jquery commands", () => {
  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");

    //the following apprach will fail -not recommended approach
    // const makeuplink= cy.get("a[href*='product/category&path']").contains("Makeup");
    // const skincarelink= cy.get("a[href*='product/category&path']").contains("Skincare");
    // makeuplink.click();
    // skincarelink.click();

    //the following apprach will pass
    // const makeuplink= cy.get("a[href*='product/category&path']").contains("Makeup");
    // makeuplink.click();
    // const skincarelink= cy.get("a[href*='product/category&path']").contains("Skincare");
    // skincarelink.click();

    // recommended approach
    cy.get("a[href*='product/category&path']").contains("Makeup").click();
    cy.get("a[href*='product/category&path']").contains("Skincare").click();
  });

  it("Navigating to specific product pages", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Makeup").click();

    //the following apprach will fail -not recommended approach
    // const header = cy.get("h1 .maintext");
    // console.log(header.text());

    //recommended approach
    cy.get("h1 .maintext").then(($headerText) => {
      const headerText = $headerText.text();
      cy.log(`found header text ${headerText}`);
      expect(headerText).is.eq("Makeup"); //assertions
    });
  });

  it.only("Validate properties of contact us page", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    //Using cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name");

    //jquery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstname = text.find("#field_11").text();
      expect(firstname).to.contain("First name");

      //embedded commands(closures)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
