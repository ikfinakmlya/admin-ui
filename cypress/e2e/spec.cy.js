describe("User login", () => {
  it("should allow user to log in with valid credentials", () => {
    cy.visit("http://localhost:5173/");

    cy.url().should("include", "/login");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "hello@example.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "*************")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Login").click();

    cy.url().should("include", "/");
    cy.wait(5000);

    // Klik tombol Logout
    cy.get("nav").contains("Logout").click();

    // Verifikasi kembali ke halaman login
    cy.url().should("include", "/login");
  });

});