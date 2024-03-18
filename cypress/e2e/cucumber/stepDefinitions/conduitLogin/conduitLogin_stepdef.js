import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

beforeEach('',()=>{
    cy.fixture('example').as('user')
})


// Given("User is on the login page", () => {
//     cy.visit('/')
//     cy.contains('Sign in').click()  
// })

// When("User login with valid Credentials", () => {
//     cy.get('input[type="email"]').type("cypressdemo@gmail.com")
//     cy.get('input[type="password"]').type("cypressdemo")
//     cy.get('input[type="submit"]').click()
// })
     
// And("User click on the settings", () => {
//     cy.get('a[href="#settings"]').click() 
      
// })

// And("User click on the logout button", () => {
//     cy.contains('logout').click()
// })

// Then("User should be routed back to login page", () => {
//     cy.get(".navbar-brand").then(function(logo){
//         cy.log(logo.text())
//     })
// })


Given(/^User is on the login page$/, () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
});

When(/^User login with valid Credentials$/, () => {
	cy.get('input[data-test="username"]').type("standard_user")
    cy.get('input[data-test="password"]').type("secret_sauce")
    cy.get('input[type="submit"]').click()
});

When(/^User click on the settings$/, () => {
	cy.contains("Open Menu").click()
});

When(/^User click on the logout button$/, () => {
	cy.contains('Logout').click()
});

Then(/^User should be routed back to login page$/, () => {
	cy.get(".login_logo").then(function(logo){
        cy.log(logo.text())
    })
});

