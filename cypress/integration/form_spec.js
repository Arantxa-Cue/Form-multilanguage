describe("Form event test", () => {
  it("opens the form page and fill in the form", () => {
    cy.visit("http://localhost:3000/");

    cy.get(".input-container-event").type("Automation Test");
    cy.get(".title-en").type("Barcelona Event");
    cy.get(".subtitle-en").type("Music Concert");
    cy.get(".textarea-en").type("Last concert of the season");
    cy.get(".input-container").type("300");

    cy.get(".form-button").click();
  });
});
