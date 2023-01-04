describe(()=>{
it(()=>{
    cy.request({
        url:"https://gorest.co.in/public/v2/users",
        method: "POST",
        email:"tenali.ramakrishna@15ce.com",
        status:"active"
    }),
    //header:""
})
})