describe('Use of fixture folder',()=>{
    let obj
    before('For Entering Data from fixture folder',()=>{
        cy.fixture('fixturedemo.json').then('',(data)=>{
            obj=data
        })
    })

    it('Example of fixture',()=>{
        cy.visit('https://www.kesari.in/login')
        cy.get('[type="email"]').first().click().type(obj.email)
        cy.get('[name="password"]').click().type(obj.password)
        cy.get('button[type="submit"]').click()
        cy.title().should('include','World Class')
    })
})