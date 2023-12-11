///<reference types="Cypress"/>

describe("Test mouse actions via webdriver uni", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#actions")
      .scrollIntoView()
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Scroll elements into view", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    
  });

  it("I should be able to drag and drop a draggable item", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("#draggable").trigger("mousedown", { which: 1 });

    cy.get("#droppable > p")
      .trigger("mousemove")
      .trigger("mouseup", { force: true });
  });

  it("I should be able to double click", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.get("#double-click").dblclick();
  });

  it.only("I should be able to hold down the left mouse click button on a given element", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
  
    cy.get("#click-box")
      .trigger("mousedown", { which: 1 })
      .then(($element) => {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)');
      });
  });
});
