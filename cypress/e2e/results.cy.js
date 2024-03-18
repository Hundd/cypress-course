describe("Results", () => {
  beforeEach(() => {
    cy.visit("example-3");
    cy.get('[data-cy="first-name-chars-left-count"]').as("CharsLeftSpan");
    cy.get('[data-cy="input-first-name"]').as("Input");
  });

  it("Displays appropriate remaining characters cout", () => {
    cy.get("@CharsLeftSpan").then(($charsLeftSpan) => {
      expect($charsLeftSpan.html()).to.equal("15");
    });
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "15");
    cy.get("@Input").type("hello");
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "10");
    cy.get("@Input").type(" my friend");
    cy.get("@CharsLeftSpan").invoke("text").should("equal", "0");
  });
});
