///<reference types="Cypress"/>

import Autostore_HomePage_PO from "../../support/pageObject/automation-test-store/autostore_homepage_PO";
import Autostore_HairCare_PO from "../../support/pageObject/automation-test-store/autostore_haircare_PO";

describe("Add multiple items to basket", () => {

  const autostore_homepage = new Autostore_HomePage_PO();
  const autostore_haircare = new Autostore_HairCare_PO();
  before(function () {

    cy.fixture("products").then(function (data) {
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.clearLocalStorage();
    cy.clearCookies();
    autostore_homepage.accessHomepage();
    autostore_homepage.clickOn_HairCare_Link();
  });

  it("Add specific product to basket", () => {
    // globalThis.data.productName.forEach(function(element){
    //     cy.addProductToBasket(element);
    // })

   // cy.get('.dropdown-toggle > .fa').click();
   autostore_haircare.addHairCareProductsToBasket();
  
    
  });
});
