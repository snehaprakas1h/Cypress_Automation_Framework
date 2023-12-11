///<reference types="Cypress"/>
import HomePage_PO from "../../support/pageObject/webdriver-uni/homepage_PO";
import ContactUs_PO from "../../support/pageObject/webdriver-uni/contactus_PO";

describe("Test contact us form via webdriver uni", () => {
  Cypress.config('defaultCommandTimeout',20000);
  const contactus_PO= new ContactUs_PO();
  before(function () {
    cy.viewport(550,750);
    cy.fixture("example").then(function (data) {
      //this.data = data;
      globalThis.data = data;
    });
  });

  beforeEach(() => {
    const homepage_PO= new HomePage_PO();
    homepage_PO.visitHomepage();
    homepage_PO.clickOn_ContactUs_Button();
    //cy.pause();
    //cy.visit(Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html");
    //cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.document().should("have.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    //cy.get('#contact-us ').click({force:true});
    // cy.get('[name="first_name"]').type(data.firstname);
    // cy.get('[name="last_name"]').type(data.lastname);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type(data.comment);
    // cy.get('[type="submit"]').click({ force: true });
    // cy.get("h1").should("have.text", "Thank You for your Message!");

    contactus_PO.contactForm_Submission(Cypress.env("firstname"),data.lastname,data.email,data.comment,"h1","Thank You for your Message!");
    //cy.webdriveruni_contactform_submission(Cypress.env("firstname"),data.lastname,data.email,data.comment,"h1","Thank You for your Message!")
  });

  it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    //cy.visit("https://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get('[name="first_name"]').type(data.firstname);
    // cy.get('[name="last_name"]').type(data.lastname);
    // cy.get("textarea.feedback-input").type(data.comment);
    // cy.get('[type="submit"]').click();
    // cy.get("body").should("include.text", "Error: all fields are required");
    // cy.get("body").contains("Error: Invalid email address");
    //cy.webdriveruni_contactform_submission(Cypress.env("firstname"),data.lastname," ",data.comment,"body","Error: Invalid email address")
    contactus_PO.contactForm_Submission(Cypress.env("firstname"),data.lastname," ",data.comment,"body","Error: Invalid email address");
  });
});
