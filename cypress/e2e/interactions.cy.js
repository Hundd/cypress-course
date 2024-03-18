describe("Basic page interactions", () => {
  beforeEach(() => {
    cy.visit("example-4");
    cy.get('[data-cy="box-1-selected-name"]').as("Selected");
  });

  describe("Double click", () => {
    it("sets header name", () => {
      cy.get('[data-cy="box-1-items-list"] > :nth-of-type(2)').dblclick();
      cy.get("@Selected").should("have.text", "Option Two");
    });
  });

  describe("check and uncheck", () => {
    it("displays the correct count for the number of selected checkboxes", () => {
      cy.get('[data-cy="box-2-checkboxes"] > :nth-of-type(1) input ').check();
      cy.get('[data-cy="box-2-selected-count"]').should("have.text", "1");
    });
  });

  describe("Select", () => {
    it("displays the name of currently selected item", () => {
      cy.get('[data-cy="box-3-dropdown"]').select("Option Two");
      cy.get('[data-cy="box-3-selected-name"]').should(
        "have.text",
        "Option Two"
      );
    });
  });

  describe("Mouse", () => {
    it("should display name of hovered item", () => {
      cy.get('[data-cy="box-4-items-list"] > :nth-of-type(2)').trigger(
        "mouseover"
      );

      cy.get('[data-cy="box-4-selected-name"]').should(
        "have.text",
        "Option Two"
      );
    });

    it("should have length 3", () => {
      cy.get('[data-cy="box-4-items-list"]')
        .children()
        .should("have.length", 3);
    });

    it("should exist", () => {
      cy.get('[data-cy="box-4-items-list"]').should("exist");
      cy.get('[data-cy="box-4-items-list"]').should("be.visible");
    });
    it("debug", () => {
      cy.get('[data-cy="box-4-items-list"]').should("exist");
      //.debug();
    });
    it("should get env", () => {
      const myVar = Cypress.env("MY_ENV_VARIABLE");
      expect(myVar).to.equal("hello");
    });

    it("should set env", () => {
      Cypress.env("MY_ENV_VARIABLE", "hello world");
      const myVar = Cypress.env("MY_ENV_VARIABLE");
      expect(myVar).equal("hello world").and.not.equal("hello");
    });
  });
});
