describe('Api', () => {
    it('Update Verify the functionality', () => {
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            body: {
                name: "Tenali Ramakrishna",
                gender: "male",
                email: `Tsenali.ramakrishna@15${Math.random() * 4}ce.com`,
                status: "active"
            },
            header: {
                Authorization: "Bearer 564f5618dfd7d8d307d7789731298096227c4501ca8e263b69c097308e3499de"
            }
        })
        .then((res) => {
            cy.log(res)
        })
        //     return res.body.id            
        // }).then((id)=>{
        //     cy.request()
        // })
    })
})