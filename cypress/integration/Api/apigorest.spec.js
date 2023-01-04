describe('Api User verification',()=>{
    it('Get verification ',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/posts",
            }).then(function({status}){
                expect(status).to.equal(200)
            })
    })
})