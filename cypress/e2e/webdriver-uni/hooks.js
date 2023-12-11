///<reference types="Cypress"/>

describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  });

  after(() => {
    cy.log("runs once after all tests in the block");
  });

  beforeEach(() => {
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    cy.log("runs after each test in the block");
  });

  it("Example test1", () => {
    cy.log("example test 1");
  });

  it("Example test2", () => {
    cy.log("example test 2");
  });

  it("Example test3", () => {
    cy.log("example test 3");
  });
});
