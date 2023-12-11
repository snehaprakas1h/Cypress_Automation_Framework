class Autostore_HomePage_PO{

    accessHomepage(){
        cy.visit(Cypress.env("autostore_homepage"));
    }

    clickOn_HairCare_Link(){
        cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    }

}

export default Autostore_HomePage_PO;