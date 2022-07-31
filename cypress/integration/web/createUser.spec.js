// ***********************************************
// This test is to check Ubank login button in desktop
// ***********************************************

describe("Myer user account", function() {
    it("should create user account - Desktop", () => {
        cy.openLoginPage();
        commonFormInput();
        cy.url().should("include", "/account");
        cy.clearCookies();
    });
    it("should create user account - mobile", () => {
        cy.openLoginPage();
        //open browser in iphoneX viewport
        cy.viewport(375, 812);
        commonFormInput();
        cy.url().should("include", "/account");
    });
});

function commonFormInput() {
    cy.enterEmail();
    cy.contains("button", "JOIN").click();
    cy.clickCreateAcctBtn();
    cy.wait(3000);
}