describe("Selecting one input", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example-3");
  });

  it("Displays appropriate remaining characters cout", () => {
    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke("text")
      .should("equal", "15");

    cy.get('[data-cy="input-first-name"]').type("hello");

    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke("text")
      .should("equal", "10");

    cy.get('[data-cy="input-first-name"]').type(" my friend");

    cy.get('[data-cy="first-name-chars-left-count"]')
      .invoke("text")
      .should("equal", "0");
  });

  it("Prevents the user from typing more character once max is exceeded", () => {
    cy.get("input")
      .eq(1)
      .type(
        "Prevents the user from typing more character once max is exceeded"
      );

    cy.get("input").eq(1).should("have.attr", "value", "Prevents the us");
  });

  it("contains", () => {
    cy.contains("You have 15 characters left")
      .get("span")
      .eq(0)
      .invoke("text")
      .should("equal", "15");
  });
});
