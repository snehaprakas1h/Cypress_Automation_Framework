///<reference types="Cypress"/>

describe("Interact with auto complete dropdown via webdriver uni", () => {
  it("Select specific values via auto dropdown lists", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("/");
    cy.get("#autocomplete-textfield")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#myInput").as("textfield");
    cy.get("@textfield").type("ava");
    cy.get("#myInputautocomplete-list > *")
      .each(($el, index, $list) => {
        const product = $el.text();
        const prodToSelect = "Avacado";
        if (product === prodToSelect) {
          //$el.click();

          $el.trigger("click");
          cy.get("#submit-button").click();
          cy.url().should("include", prodToSelect);
        }
      })
      .then(() => {
        cy.get("@textfield").type("g");
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list) => {
          const product = $el.text();
          const prodToSelect = "Grapes";
          if (product === prodToSelect) {
           // $el.click();
            $el.trigger("click");
            cy.get("#submit-button").click();
            cy.url().should("include", prodToSelect);
          }
        });
      });
  });
});
