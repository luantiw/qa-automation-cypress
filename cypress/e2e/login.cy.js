import LoginPage from "../pages/LoginPage";

describe("Login - E2E", () => {

  beforeEach(() => {
    cy.fixture("users").as("users");
    LoginPage.visit();
  });

  it("Deve realizar login com sucesso", function () {
    LoginPage.login(
      this.users.validUser.username,
      this.users.validUser.password
    );

    cy.url().should("include", "/inventory");
    cy.contains("Products").should("be.visible");
  });

  it("Deve exibir erro no login inválido", function () {
    LoginPage.login(
      this.users.invalidUser.username,
      this.users.invalidUser.password
    );

    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Username and password do not match");
  });
});