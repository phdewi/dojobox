describe('e2e',function () {
    it ('Beli HP', function () {
        // cy.bukaURL()
        // cy.contains('Iphone 6 32gb').click()
        // cy.contains('Add to cart').click()
        // cy.contains('OK').click()   
    }),

    it ('Login', function () {
        cy.bukaURL()
        cy.get('#login2').click()
        cy.get('#loginusername').type('della')
        cy.wait(1000)
        cy.get('#loginpassword').type('dellapan')
        cy.wait(1000)
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    }),

    // it ('Sign Up', function () {
    //     cy.bukaURL()
    //     cy.get('#login2').click()
    //     cy.get('#sign-username').type('ayu')
    //     cy.wait(1000)
    //     cy.get('#sign-password').type('ayubanget')
    //     cy.wait(1000)
    //     cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    //     cy.wait(1000)
    // })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
} )