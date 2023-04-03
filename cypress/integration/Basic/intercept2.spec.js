///<reference types ="Cypress"/>

describe('Verify the functionality of intercept',function(){

    it('Verify the get post',function(){
        cy.intercept({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).as('getComment')
    })
})