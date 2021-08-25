describe('Kumpulan test case',function () {
    it ('Test case satu', function () {
        cy.visit('https://demoqa.com/automation-practice-form ')
        cy.get('#firstName').type('Saya')
        cy.get('#lastName').type('Siapa?')
        cy.get('#userEmail').type('saya@siapa.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()
        // untuk gender
        //cy.get('[type="radio"]').first().check({force: true});
        cy.get('#userNumber').type('08999999999')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        // untuk hobbies
        //cy.get('#hobbies-checkbox-1').check({force: true});
        cy.get('#currentAddress').type('jekata')
        cy.get('#submit').click()
        
        
        
        
        
        //dropdown
        //cy.get('select').select('opel')
        //checkbox
        //cy.get('[value="Bike"]').check()
    } )
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
} )