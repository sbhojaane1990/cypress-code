///<reference types ="Cypress"/>

describe('Mouse Over functionality',()=>{
    it(()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('[class="mouse-hover"]').invoke('show')
    })
})