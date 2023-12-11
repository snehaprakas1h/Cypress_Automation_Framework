///<reference types="Cypress"/>

describe("Data table in web driver university", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
  });
  it("calculate and assert the total age of all users", () => {
    var userDetails = [];
    let num = 0;
    cy.get("#thumbnail-1 td")
      .each(($el, index, $list) => {
        userDetails[index] = $el.text();
      })
      .then(() => {
        var i;
        for (i = 0; i < userDetails.length; i++) {
          if (Number(userDetails[i])) {
            num += Number(userDetails[i]);
          }
          //cy.log(userDetails[i]);
        }
      })
      .then(() => {
        cy.log(num);
        expect(num).to.be.eq(322);
      });
  });

  it.only("calculate and assert the age of a given user based on last name", () => {
    cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list) => {
      var name = "Woods";
      const text = $el.text();

      if (text.includes("Woods")) {
        cy.get("#thumbnail-1 tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (age) {
            const userAge = age.text();
            expect(userAge).to.be.equal("80");
          });
      }
    });
  });
});
