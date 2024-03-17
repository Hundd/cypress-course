describe("heading", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/example-1");
  });

  it("contains correct text", () => {
    cy.get("h1").invoke("text").should("contain", "My Awesome Web Application");
  });
});
