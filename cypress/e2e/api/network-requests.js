/// <reference types="cypress"/>

describe("Network requests", () => {
  let message = "unble to find comment";
  beforeEach(() => {
    cy.visit("https://example.cypress.io/commands/network-requests");
  });

  it("Get request", () => {
    cy.intercept(
      {
        method: "GET",
        url: "**/comments/*",
      }, //url that should be listened or target url
      {
        body: {
          postId: 1,
          id: 1,
          name: "tester",
          email: "hote@gmail.com",
          body: "hi gm", //body that needs to be mocked with our own data so we dont rely response from server
        },
      }
    ).as("getComment");

    cy.get(".btn-primary").click();

    cy.wait("@getComment").its("response.statusCode").should("eq", 200);
  });

  it("Post request", () => {
    cy.intercept({
      method: "POST",
      url: "**/comments",
    }).as("postComment");

    cy.get(".network-post").click();

    cy.wait("@postComment").should(({ request, response }) => {
      console.log(request);

      expect(request.body).to.include("email");
      expect(request.headers).to.have.property("content-type");
      expect(request.headers).to.have.property(
        "Origin",
        "https://example.cypress.io"
      );
      console.log(request.headers);
      //console.log(response.headers)
      expect(response.body).to.have.property(
        "name",
        "Using POST in cy.intercept()"
      );
    });
  });

  it.only("PUT request", () => {
    cy.intercept("PUT", "**/comments/*", {
      statusCode: 404,
      body: {
        error: message,
      },
      delay: 500,
    }).as("putComment");

    cy.get(".network-put").click();

    cy.wait("@putComment");

    cy.get('.network-put-comment').should("contain",message);
  });
});
