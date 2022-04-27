describe("Form event test", () => {
  it("opens the form page and fill in the form", () => {
    cy.visit("http://localhost:3000/");

    cy.get("eventName").type("Automation Test");
    cy.get("title").type("Barcelona Event");
    cy.get("subtitle").type("Music Concert");
    cy.get("description").type("Last concert of the seasson");
    cy.get("capacity").type("300");
  });
});
