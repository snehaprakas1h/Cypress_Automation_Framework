///<reference types="Cypress"/>

describe("Data picker in web driver university", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
  });
  it("verify and assert date picker", () => {
    // let date = new Date();
    // date.setDate(date.getDate());
    // cy.log(date.getDate());

    // let date2 = new Date();
    // date2.setDate(date2.getDate()+5);
    // cy.log(date2.getDate());

    cy.get("#datepicker").click();
    var date = new Date();
    date.setDate(date.getDate() + 130);

    var futureYear = date.getFullYear();
    var futureMonth = date.toLocaleString("default", { month: "long" });
    var futureDate = date.getDate();

    cy.log(
      `future  year : ${futureYear}, future month : ${futureMonth}, future date : ${futureDate}`
    );

    function selectMonthAndYear() {
      cy.get(".datepicker-dropdown")
        .find(".datepicker-switch")
        .first()
        .then((currentDate) => {
          if (!currentDate.text().includes(futureYear)) {
            cy.get(".next").first().click();
            selectMonthAndYear();
          }
        })
        .then(() => {
          cy.get(".datepicker-dropdown")
            .find(".datepicker-switch")
            .first()
            .then((currentDate) => {
              if (!currentDate.text().includes(futureMonth)) {
                cy.get(".next").first().click();
                selectMonthAndYear();
              }
            });
        });
    }
    function selectFutureDate(){
      cy.get("td[class='day']").contains(futureDate).click();
    }

    selectMonthAndYear();
    selectFutureDate();
  });
});
