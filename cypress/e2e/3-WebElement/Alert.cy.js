
/// <reference types="cypress" />

describe('alerts in cypress',function(){
    it('verify the js alert',function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.get('button').contains('Click for JS Alert').click()
    })
})