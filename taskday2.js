describe('Kumpulan test case',function () {
    it ('Email me', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Gigi Hadyd').should('have.value','Gigi Hadyd')
        cy.get('#et_pb_contact_email_0').type('gigihadyd@gmail.com').should('have.value','gigihadyd@gmail.com')
        cy.get('.et_pb_contact_submit').click()    
    }),
    
    it ('Jenis Kelamin', function() {
        cy.get('[value="other"]').click().should('be.checked')
    }),
    it ('Checkboxer', function(){
        cy.get('[value="Bike"]').click().should('be.checked')
    }),

    it('Dropdown', function() {
        //cy.get('select').select('Audi').should('have.value','audi')
        cy.get('select').select('Audi').should('be.selected','Audi')
    }),

    it('Click me', function () {
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click().should('have.text','Click Me')
    })


    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
} )