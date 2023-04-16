describe('verify the funcality of flipkart', () => {
//     Cypress.on('uncaught:exception', (err, runnable) => {
//     return false
// });
    it('verify the flipkart product', () => {
        cy.visit(' https://www.flipkart.com/');
        cy.get('input[type="text"]').type('iphone{enter}');
        // cy.get('button[type="submit"]').click();
       
        cy.get('._1fQZEK').first().invoke("removeAttr", "target").click();
        cy.get("._30jeq3._16Jk6d").then((el) => {
            cy.log(el.text());
            console.log(el.text());
        });
        cy.wait(4000)
        cy.get('svg[class="_1KOMV2"]').click();
        cy.wait(4000)
        cy.get("._23FHuj").last().click();
        cy.wait(2000);
        cy.get("._2-ut7f._1WpvJ7").first().then((el) => {
            cy.log(el.text());
            console.log(el.text());
        });
    });
});