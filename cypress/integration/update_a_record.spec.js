/* global cy */
describe("Updating a record", () => {
  it("Should display an updated record when updating", () => {
    cy.visit("http://localhost:3000");
    cy.visit("http://localhost:3000/records");
    cy.get('.CreateRecordFrom input[name="Consignor"]').type("You");
    cy.get('.CreateRecordFrom input[name="Consignee"]').type("Me");
    cy.get('.CreateRecordFrom input[name="Origin"]').type("San Francisco");
    cy.get('.CreateRecordFrom input[name="Destination"]').type("San Jose");
    cy.get('.CreateRecordFrom button[id="btnCreateRecord"]').click();
    cy.get('.Record button[id="btnUpdateRecord"]').click({ multiple: true });
    cy.contains("onTheWay");
    cy.get('.Record button[id="btnDeleteRecord"]').click({ multiple: true });
  });
});
