///<reference types ="Cypress"/>
describe('',()=>{
    it('',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.url().should('include','flipkart')
        cy.get('[class="_1_3w1N"]').click()
        cy.get('[class="_14Me7y"]').click()

        cy.get('[class="_2IX_2- VJZDxU"]').type('9067989067')
        cy.get('[name="password"]').type('mercury')
        cy.get('type="submit"').should('be.visible').click()
        cy.wait(2000)
        cy.title().should('eq','Login Successfully')
  //.should('be.visible').should('be.enabled').
    })
})