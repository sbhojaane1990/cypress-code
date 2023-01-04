///<reference types = "Cypress"/>
describe("verify alert confirm and prompt", () => {
    before(() => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it.skip('Verify thr js alert', () => {
        cy.on('windows:alert', function (str) {
            expect(str).eq('I am a JS Alert')
            return true
        })
        cy.contains('Click for JS Alert').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')
        // cy.on('windows:alert',function(str){
        //     return true
    })

    it.skip("confirm js alert", () => {
        cy.on('windows:alert ok', function (str2) {
            expect(str2).eq('I am a JS Confirm')
            return true
        })
        cy.contains('Click for JS Confirm').click()
        cy.get('#result').should('have.text', 'You clicked: Ok')
    })
    it.only("Verify the prompt alert",()=>{
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('Hello')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: Hello')
    })  
    it.only("Verify the prompt alert",()=>{
        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('null')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text','You entered: null')
    })

//     it.only("confirm js alert Cancel", () => {
//         cy.on('windows:alert', function (str2) {
//             expect(str2).eq('I am a JS Confirm')
//             return true
//         })
//         cy.contains('Click for JS Confirm').click()
//         cy.get('#result').should('have.text','You clicked: OK')
//     })
// })
})