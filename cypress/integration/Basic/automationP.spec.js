///<reference types ="Cypress"/>

describe('Verify yhe Automation Practice Website',()=>{

    it('TC_01 Verify the functions',()=>{
        cy.visit('https://automationexercise.com/')
        cy.contains(' Products').click()
        .should('contain','Category')
    })
})