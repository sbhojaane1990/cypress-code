///<reference types ="Cypress"/>
describe('Functionality of fixture folder', () => {
    let my
    before(() => {
        cy.fixture('names').then((ele) => {
            my = ele
        })
    })

    it("How to test fixture folder", () => {

        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(my.name)
        cy.get('[name="last_name"]').type(my.lname)
        cy.get('[name="email"]').type(my.gmail)
        cy.get('[name="message"]').type(my.Msg)
        cy.get('[value="SUBMIT"]').click()
        cy.contains('Thank You for your Message!')
        cy.url().should('contain','thank-you.html')
        cy.title().should('contain','Gianni Bruno')
        
        
    })
})