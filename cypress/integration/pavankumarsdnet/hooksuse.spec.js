describe('My test suit', () => {
    before(function () {
        cy.log("-----------This is setup block---------------")
    })
    after(function () {
        cy.log("-----------This is Tear Down block---------------")
    })
    beforeEach(function () {
        cy.log("-----------This is Login block---------------")
    })
    afterEach(function () {
        cy.log("-----------This is Logout block---------------")
    })

    it('Searching',function(){
        cy.log("-----------This is Searching Test---------------")
        
    })
    it('Advance',function(){
        cy.log("-----------This is Advance Test---------------")
        
    })
    it('Listing Product',function(){
        cy.log("-----------This is Listing Product Test---------------")
        
    })
})