///<reference types ="Cypress"/>
describe('LOcatorsin the element',()=>{
    it('Verify the types of locator',()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.get('[type="text"]').type('Apple MacBook Pro 13-inch')
        cy.get('[type="submit"]').click()
      //  cy.wait(2000)
      cy.get('.button-2.product-box-add-to-cart-button').click()
      cy.get('#add-to-cart-button-4').click()
        //cy.wait(2000)
      cy.get('[class="cart-label"]').click()
    
    })
})