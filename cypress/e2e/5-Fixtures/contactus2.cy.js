/// <reference types="cypress" />

import ud from "../../fixtures/contactus4"

describe('verify the testcase with sets of data', function () {
    // it('verify the contactus with separate data', function () {
    //     ud.forEach(function(el){
    //     cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //     cy.get('input[name="first_name"]').type(el.firstName)
    //     cy.get('input[name="last_name"]').type(el.lastName)
    //     cy.get('input[name="email"]').type(el.email)
    //     cy.get('textarea[name="message"]').type(el.message)
    //     cy.get('input[type="submit"]').click()
    //     cy.get('h1').should('exist')
    //     })
    // })

    ud.forEach(function (el,index) {
        it(`verify the contactus with dataset-${index+1}`, function () {
                cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('input[name="first_name"]').type(el.firstName)
                cy.get('input[name="last_name"]').type(el.lastName)
                cy.get('input[name="email"]').type(el.email)
                cy.get('textarea[name="message"]').type(el.message)
                cy.get('input[type="submit"]').click()
                cy.get('h1').should('exist')
            
        })
    })
    })