///<reference types ="Cypress"/>
describe('Gorest api',()=>{
    it.skip('Get Request',()=>{
        cy.request({
            method:"GET",
            url:"https://gorest.co.in/public/v2/users",
            headers:{
                Authorization: "Bearer564f5618dfd7d8d307d7789731298096227c4501ca8e263b69c097308e3499de"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(200)
            expect(res.body)
        })
    })

    it.only('Post Request',()=>{
        cy.request({
            method:"POST",
            url:"https://gorest.co.in/public/v2/users",
            body:{
                name:"Tenali Ramakrishna",
                gender:"male",
                email:"tenali.ramakrishna@15ce.com",
                status:"active"
            },
            headers:{
                Authorization: "Bearer 564f5618dfd7d8d307d7789731298096227c4501ca8e263b69c097308e3499de"
            }
        }).then((res)=>{
            cy.log(res)
            expect(res.status).to.eql(201)
            expect(res.duration).to.be.lessThan(800)
        })
    })
})