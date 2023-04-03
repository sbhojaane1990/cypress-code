describe("Api WIth GorestAssurance Website",()=> {
    it("Verify the response",()=> {
        cy.request({
            method:"GET",
            url: "https://gorest.co.in/public/v2/users",
            header:{
                Authorization:"Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
            }
          
        }).then((res)=>{
            cy.log(res)
            cy.log(res.body.length)
            expect(res.status).to.eql(200)
            expect(res.body.length).to.eql(10)
            expect(res.duration).to.be.lessThan(550)
        })

    })
    it.only("Create User Using POST",function(){
       cy.request({
        method: "POST",
        url:"https://gorest.co.in/public/v2/users",
        body: {
            "name":"Tenali Ramakrish",
            "gender":"female",
            "email":"a1234@gmail.com",
            "status":"inactive"
        },
        header:{
            Authorization:"Bearer dffaaf069879f07c79c8e84c62379111f52fed6134da4be300d705598a29da76"
        }
       })
            
        })
    })
