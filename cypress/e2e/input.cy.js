describe("Text box with max characters", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example-2");
  });

  it("Displays appropriate remaining characters cout", () => {
    cy.get("span").invoke("text").should("equal", "15");

    cy.get("input").type("hello");

    cy.get("span").invoke("text").should("equal", "10");

    cy.get("input").type(" my friend");

    cy.get("span").invoke("text").should("equal", "0");
  });

  it("Prevents the user from typing more character once max is exceeded", () => {
    cy.get("input").type(
      "Prevents the user from typing more character once max is exceeded"
    );

    cy.get("input").should(
      "have.attr",
      "value",
      "Prevents the us"
    );
  });
});
