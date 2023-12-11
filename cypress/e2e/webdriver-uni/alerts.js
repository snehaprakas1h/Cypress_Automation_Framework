///<reference types="Cypress"/>

describe("Handle JS alerts", () => {
  it("Confirm JS Alerts", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button1").click({ force: true });

    cy.on("window:alert", (str) => {
      expect(str).to.eq("I am an alert box!");
    });
  });

  it("Validate JS confirm alert box works correctly when clicking ok", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click({ force: true });

    cy.on("window:confirm", (str) => {
      return true;
    });

    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Validate JS confirm alert box works correctly when clicking cancel", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#button4").click({ force: true });

    cy.on("window:confirm", (str) => {
      return false;
    });

    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Validate JS alert box using stubs", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });

    const stub=cy.stub();

    cy.on("window:confirm", stub);
    cy.get("#button4").click({ force: true }).then(()=>{
        expect(stub.getCall(0)).to.be.calledWith('Press a button!');
    }).then(()=>{
        return true;
    }).then(()=>{
        cy.get("#confirm-alert-text").contains("You pressed OK!");
    })

  });
});
