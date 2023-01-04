///<reference types ="cypress"/>
describe('Flipkart',()=>{
    let info
    before(()=>{
        cy.fixture(names).then((ele)=>{
            info = ele
        })
        cy.visit('https://www.flipkart.com/',()=>{
            cy.get('')
        })
    })
})