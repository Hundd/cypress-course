describe("Alias", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example-3");
    cy.get('[data-cy="first-name-chars-left-count"]').as("CharsLeftSpan");
    cy.get('[data-cy="input-first-name"]').as("Input");
  });

  it("Displays appropriate remaining characters cout", () => {
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "15");
    cy.get("@Input").type("hello");
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "10");
    cy.get("@Input").type(" my friend");
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "0");
  });

  it("Prevents the user from typing more character once max is exceeded", () => {
    cy.get("@Input").type(
      "Prevents the user from typing more character once max is exceeded"
    );

    cy.get("@Input").should("have.attr", "value", "Prevents the us");
  });

  it("contains", () => {
    cy.contains("You have 15 characters left")
      .get("span")
      .eq(0)
      // .invoke("text")
      .should("contain.text", "15");
  });
});
