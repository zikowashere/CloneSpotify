import type {} from "cypress";

describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:5173/");
    //cy.contains("type");
  });
});
