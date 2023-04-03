///<reference types ="Cypress"/>
describe('Verify the basic functionality of methods',()=>{
    it('cy visit and cy get methode',()=>{
        cy.visit('https://the-internet.herokuapp.com/inputs');
        cy.get('.example p').as('num');
        cy.get('@num').should('have.text','Number');
    })

    it.only('cy find ',()=>{

        cy.visit('https://the-internet.herokuapp.com/tables')
        cy.get('table1').find('tbody>tr').first().find('td').find('a').first().click()
    })
})