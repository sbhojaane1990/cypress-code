///<reference types="Cypress"/>

describe('Table Test',function(){
    it('Verify table element',function(){
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('table[name="BookTable"]').contains('td','Learn selenium')
       // cy.get('table[name="BookTable"] > tbody > tr:nth-child(2) >td:nth-child(3)').contains('selenium').should('be.visible')
  
        // cy.get('table[name="BookTable"] > tbody > tr td:nth-child(2)').each(($e,index,$list)=>{
        //     const text=$e.text()
        //     if(text.includes("Amod"))
        //     {
        //         cy.get('table[name="BookTable"] > tbody > tr td:nth-child(1)').eq(index).then(function(bname){
        //             const bookName=bname.text() 
        //             expect(bookname).to.equal("Master In Java")
        //         })
        //     }

        // })
    })
})