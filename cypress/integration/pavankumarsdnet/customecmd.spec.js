describe('custome Suite', ()=> {
it('',()=>{
    cy.login('admin@yourstore.com','admin')
    cy.title().should('to.equal','Dashboard / nopCommerce administration')
})
})