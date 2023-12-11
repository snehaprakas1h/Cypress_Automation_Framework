///<reference types="Cypress"/>

describe("Iterate over elements", () => {
  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log(`index ${index} : ${$el.text()}`);
    });
  });

  it("Add specific product to cart", () => {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();

    // cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
    //   cy.log(`index ${index} : ${$el.text()}`);

    //   if ($el.text().includes("Curls to straight Shampoo")) {
    //     cy.wrap($el).click();
    //   }
    // });

    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add seeweed conditioner product to cart", () => {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.selectProduct("Seaweed Conditioner");
  });

  it("Add Eau Parfumee au The Vert Shampoo product to cart", () => {
    // cy.visit("https://automationteststore.com/");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
