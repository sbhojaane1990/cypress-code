// describe('Iframe Inside Iframe', () => {
//     it("Using iquesry", () => {
//         cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
//         //    cy.get('[href="index.html"]').should('be.visible','Home')
//         cy.get('#frame').then(function ($el) {
//             let body = $el.contents().find('body')
//             cy.wrap('body').as('bdy')
//             cy.get('bdy')
//            // cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
//         })
//     })
// })

///<reference types="cypress"/>
describe('this is describe',()=>{
    Cypress.on('uncaught:exception',function(err,runnable){
        return false
    })
   it('this is IT block ',()=>{
    cy.visit('https://demo.automationtesting.in/Frames.html')
    cy.get(':nth-child(2) > .analystic').click()
    cy.get('#Multiple iframe').then(function($frame){
        let body=$frame.contents().find('body')
        cy.wrap(body).as('frameBody')
        cy.get('@frameBody').find('.iframe-container iframe').then(function($secIframe){
            let secBody=$secIframe.contents().find('body')
            cy.wrap(secBody).as('secframeBody')
            cy.get('@secframeBody').find('.container .row input').type('Iframe code is working',{force:true})
        })
    })
})
})
