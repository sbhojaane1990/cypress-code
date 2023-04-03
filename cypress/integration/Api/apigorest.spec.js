describe('Api User verification', () => {
    it('Get verification ', () => {
        cy.request({
            method: "GET",
            url: "https://gorest.co.in/public/v2/posts",
            headers: {
                Authorization: "Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
            }
            }).then(function(res){
                cy.log(res)
        })
        //.then(function({status}){
        //  expect(status).to.equal(200)
        //})
    })
//     it("Post verification",()=>{
//         cy.request({
//             method:"POST",
//             url:""

//         })
//     })
})