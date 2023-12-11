///<reference types="Cypress"/>

describe("Alias and invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");

    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate numvber of products and assert add to cart img of each product", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("product");

    cy.get("@product").its("length").should("be.gt", 15);
    cy.get("@product")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");

    cy.get(".thumbnail").as("product");
    // cy.get('@product').find('.oneprice').each(($el,index,$list)=>{
    //   cy.log($el.text());
    // });

    cy.get("@product").find(".oneprice").invoke("text").as("itemPrice");
    cy.get("@product").find(".pricenew").invoke("text").as("saleItemPrice");

    var itemTotal = 0;
    cy.get("@itemPrice").then(($linktext) => {
      var itemPriceTotal = 0;
      var itemPrice = $linktext.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemTotal += itemPriceTotal;
      cy.log(`non-sale price items total ${itemPriceTotal}`);
    });

    cy.get("@saleItemPrice").then(($linktext) => {
      var saleItemPriceTotal = 0;
      var saleItemPrice = $linktext.split("$");
      var i;
      for (i = 0; i < saleItemPrice.length; i++) {
        cy.log(saleItemPrice[i])
        saleItemPriceTotal += Number(saleItemPrice[i]);
      }
      itemTotal += saleItemPriceTotal;
      cy.log(`sale item price total ${saleItemPriceTotal}`);
    }).then(()=>{
        cy.log(`total price of all total ${itemTotal}`)
        expect(itemTotal).to.equal(660.5);
    })
  });
});
