/// <reference types="cypress" />

import us from "../../fixtures/contactus2.json"
import us2 from "../../fixtures/contactus3.js"


let info = {
    firstName: 'Pooja',
    lastName: 'Fulzele',
    email: 'poojafulzele@gmail.com',
    message: 'I am learning Java'
}

describe('verify the contact us form', function () {

    let userdata = undefined
    before(function () {
        cy.fixture('contactus2').then(function (users) {
            userdata = users

        })
    })

    it('click on the function', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Pooja')
        cy.get('input[name="last_name"]').type('Fulzele')
        cy.get('input[name="email"]').type('poojafulzele@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning JS')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('exist')
    })




    it('verify the contact us form from above defined object', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(info.firstName)
        cy.get('input[name="last_name"]').type(info.lastName)
        cy.get('input[name="email"]').type(info.email)
        cy.get('textarea[name="message"]').type(info.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('exist')
    })


    it('contactus from fixture folder', function () {
        cy.fixture('contactus').then(function (data) {
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type(data.firstName)
            cy.get('input[name="last_name"]').type(data.lastName)
            cy.get('input[name="email"]').type(data.email)
            cy.get('textarea[name="message"]').type(data.message)
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('exist')
        })

    })


    it('verify the contact us form with user data one', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(userdata.userdataOne.firstName)
        cy.get('input[name="last_name"]').type(userdata.userdataOne.lastName)
        cy.get('input[name="email"]').type(userdata.userdataOne.email)
        cy.get('textarea[name="message"]').type(userdata.userdataOne.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('exist')
    })


    it('verify the contact us form with user data two', function () {
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type(userdata.userdataTwo.firstName)
        cy.get('input[name="last_name"]').type(userdata.userdataTwo.lastName)
        cy.get('input[name="email"]').type(userdata.userdataTwo.email)
        cy.get('textarea[name="message"]').type(userdata.userdataTwo.message)
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('exist')
    })

    it.only('contact us form with user data from import json',function(){
        cy.log(us)
    })

    it.only('contact us form with user data from import js',function(){
        cy.log(us2)
    })


})