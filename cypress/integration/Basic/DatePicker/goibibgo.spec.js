///<reference types ="Cypress"/>
describe("",()=>{
it.only("Goibibo.com Website calender",()=>{
    let date = new Date()

    date.setDate(date.getDate()+300)
    let da = date.getDate()
    cy.log(da)
    let fullmonth = date.toLocaleString('default',{month:"long"})
    cy.log(fullmonth)

    let year=date.getFullYear()
    cy.log(year)

    cy.visit('https://www.goibibo.com/')
    
    cy.get(':nth-child(3) > .sc-gGCDDS').click({force:true})
    function SelectMonthAndYear(){
        cy.get('.DayPicker-Months').last().then((el)=>{
            cy.log(el.text())
            cy.log(typeof(el.text()))
            if (!el.text().includes(year)){
                cy.get("[aria-label='Next Month']").click({force: true})
                SelectMonthAndYear()
            }
        })
    }
  

        cy.get(':nth-child(3) > .sc-gGCDDS').click({force:true})
        function SelectMonthAndYear(){
            cy.get('.DayPicker-Months').last().then((el)=>{
                // cy.log(el.text())
                // cy.log(typeof(el.text()))
                if (!el.text().includes(fullmonth)){
                    cy.get("[aria-label='Next Month']").click({force: true})
                    SelectMonthAndYear()
                }
            })
    }
    SelectMonthAndYear()
    function selectDate(){
        cy.get('').click()
    }
})
})