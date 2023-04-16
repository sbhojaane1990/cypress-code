///<reference types="cypress" />

describe('verify the funcality of flipkart', () => {
//        Cypress.on('uncaught:exception', (err, runnable) => {
//     return false
// });
   it('verify the flipkart product', () => {
       cy.visit(' https://www.flipkart.com/')
      cy.get('.InyRMC._3Il5oO').rightclick()
    //    cy.get('input[type="text"]').type('iphone 13 128{enter}')
    //    cy.wait(2000)
    //   // cy.contains('APPLE iPhone 13 (Blue, 128 GB)').click()
    //    cy.get('._4rR01T').first().invoke("removeAttr", "target").click()
    //     cy.get("._30jeq3._16Jk6d").then((el) => {
    //     cy.log(el.text())
    //     console.log(el.text())
    //     })
    //     cy.get("._2KpZ6l._2U9uOA._3v1-ww")
    //     //contains("ADD TO CART").first().Click();
    //     cy.get("._23FHuj").last().click()
    //     cy.wait(1000)
    //     cy.get("._2-ut7f._1WpvJ7").first().then((el) => {
    //         cy.log(el.text())
    //         console.log(el.text());
    //     })
   })
})