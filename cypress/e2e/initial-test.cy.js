describe("Testing ", () => {
  const baseUrl = Cypress.env("baseUrl");
  beforeEach(() => {
    cy.visit(`${baseUrl}`, { failOnStatusCode: false });
  });

  it("index to adduser fill, submit form and redirect back to index", () => {
    cy.get("[data-cy='create']").click();
    cy.url().should("eq", `${baseUrl}/#/add-user`, {
      failOnStatusCode: false,
    });
    cy.get("[data-cy='name']").type(Cypress.env("auth_name"));
    cy.get("[data-cy='email']").type(Cypress.env("auth_email"));
    cy.get("[data-cy='password']").type(Cypress.env("auth_password"));
    cy.get("[data-cy='add']").click();
    cy.url().should("eq", `${baseUrl}/#/`, {
      failOnStatusCode: false,
    });
  });
});
