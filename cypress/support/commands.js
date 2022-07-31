// ***********************************************
// These tests are the common steps for both mobile and desktop tests.
// ***********************************************

// open login page
Cypress.Commands.add("openLoginPage", () => {
    cy.visit("join");
});

// click on Create account button
Cypress.Commands.add("clickCreateAcctBtn", () => {
    cy.get("#password").type("Comestri#1");
    cy.get("#first-name").type("Adam");
    cy.get("#last-name").type("Smith");
    cy.get("#mobile-phone").type("0400000000");
    cy.get("#date-of-birth").type("04/10/1989");
    cy.get("#address").type("1 Sussex Street");
    cy.get("ul.MuiList-root > .MuiListItem-button:nth-child(1)").click();
    cy.get("#create-account").click();
});

// enter random email id for signup
Cypress.Commands.add("enterEmail", () => {
    cy.get("#email").should("be.visible").type(userEmail());

    function userEmail() {
        var email = "webtester+";
        var randomtext = "";
        var random = "qwertyuioplkjhgfdazxcvbnm1234567890";
        for (var i = 0; i < 4; i++)
        randomtext += random.charAt(Math.floor(Math.random() * random.length));
        var value = email + randomtext.concat("@gmail.com");
        return value;
    }
});

//get API request
Cypress.Commands.add("getAPIUrl", () => {
    cy.request({
        method: "POST",
        url: "https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&APPID=4a7be9f43d83ff0e468df3060707c336",             
    })
});

