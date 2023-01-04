describe('Iframe Inside Iframe', () => {
    it("Using iquesry", () => {
        cy.visit('http://www.webdriveruniversity.com/IFrame/index.html')
        //    cy.get('[href="index.html"]').should('be.visible','Home')
        cy.get('#frame').then(function ($el) {
            let body = $el.contents().find('body')
            cy.wrap('body').as('bdy')
            cy.get('bdy')
           // cy.get('@bdy').find('a[href="index.html"]').should('have.text','Home')
        })
    })
})