///<reference types ="Cypress"/>
describe("",()=>{
it.only("Date Picker By RedBus",()=>{
    let date = new Date()

    date.setDate(date.getDate()+300)
    let da = date.getDate()
    cy.log(da)
    let fullmonth = date.toLocaleString('default',{month:"long"})
    cy.log(fullmonth)

    let year=date.getFullYear()
    cy.log(year)

    cy.visit('https://www.redbus.com/')
    
    cy.get('#date-box').click({force:true})
    function SelectMonthAndYear(){
        cy.get('.DayNavigator__CalendarHeader-sc-1tlckkc-1').last().then((el)=>{
            cy.log(el.text())
            cy.log(typeof(el.text()))
            if (!el.text().includes(year)){
                cy.get("#next").click({force: true})
                SelectMonthAndYear()
            }
        })
    }

        cy.get('.DayNavigator__CalendarHeader-sc-1tlckkc-1').last().then((el)=>{
            function SelectMonthAndYear(){
                cy.get('.DayPicker-Months').last().then((el)=>{
                    // cy.log(el.text())
                    // cy.log(typeof(el.text()))
            if (!el.text().includes(fullmonth)){
                cy.get("#next").click({force: true})
                SelectMonthAndYear()
            }
        })

    }
})
    SelectMonthAndYear()
    function selectDate(){
        cy.get('').click()
    }
})
})