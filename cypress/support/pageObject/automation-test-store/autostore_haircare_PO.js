class Autostore_HairCare_PO {
  addHairCareProductsToBasket() {
    globalThis.data.productName.forEach(function (element) {
      cy.addProductToBasket(element).then(() => {
       // debugger;
      });
    });

    cy.get(".dropdown-toggle > .fa").click().debug();
  }
}

export default Autostore_HairCare_PO;
