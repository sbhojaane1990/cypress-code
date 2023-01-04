///<reference types="Cypress"/>
describe('TS_01 Verify the Kitchen api example',()=>{
    it('Verify the get comment api',()=>{
        cy.request({
            method:"GET",
            url:"https://jsonplaceholder.cypress.io/comments/1"
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })
    })
    it('Verify the Post comment api',()=>{
        cy.request({
            method:"POST",
            url:"https://jsonplaceholder.cypress.io/comments",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
                }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(201)
        })
        
    })
    it('Verify the update comment api',()=>{
        cy.request({
            method:"PUT",
            url:"https://jsonplaceholder.cypress.io/comments/1",
            body:{
                "name": "Using POST in cy.intercept()",
                "email": "hello@cypress.io",
                "body": "You can change the method used for cy.intercept() to be GET, POST, PUT, PATCH, or DELETE"
                }
        }).then(function(res){
            cy.log(res)
            expect(res.status).to.eq(200)
        })
        
    })
})