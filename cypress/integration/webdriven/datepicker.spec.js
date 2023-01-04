///<reference types = "Cypress"/>
describe('WebdrivenUniversity website functionality', () => {
    // before('Previsiting',()=>{

    // })
    it('Functionality of datepicker', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        let date = new Date()
        date.setDate(date.getDate() + 300)
        let day = date.getDate()
        let month = date.getMonth() + 1
        let monthIntext = date.toLocaleString('default', { month: "long" })
        let year = date.getFullYear()

        // console.log(year)
        // console.log(day)
        // console.log(month)
        console.log(monthIntext)
        cy.get('.form-control').click()
        function getYearMonth() {
            cy.get('.datepicker-switch').first().then((el) => {
                //      cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.next').first().click()
                    getYearMonth()
                }

            }).then(() => {
                cy.get('.datepicker-switch').first().then((el) => {
                    if (!el.text().includes(monthIntext)) {
                        cy.get('.next').first().click()
                        getYearMonth()
                    }
                })
            })
        }
        getYearMonth()
        function getDate() {
            cy.get('.day').contains(day).click()
        }
        getDate()

    })
})