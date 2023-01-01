///<reference types = "Cypress"/>

describe('Functionality of fixtur',()=>{
    let obj
    before(() => {
        cy.fixture('names').then((ele) => {
            obj = ele
        })
    })
    it('Verify the functionality of fixure',()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(obj.name)
        cy.get('[name="last_name"]').type(obj.lname)
        cy.get('[name="email"]').type(obj.gmail)
        cy.get('[name="message"]').type(obj.Msg)
        cy.get('[type="submit"]').click()
        //cy.contains('')
    })
})