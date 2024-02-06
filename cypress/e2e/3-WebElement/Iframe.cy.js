/// <reference types="cypress" />


let iframeExist = function(id){
    return cy.get(`#${id}`).its('0.contentDocument').should('exist')
}

let Constbody = function(id){
    return cy.get(id).its('body').should('not.be.undefined').then(cy.wrap)
}

describe('Managing iframe in cypress',function(){
    it('managing iframe - jquery',function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')

        // cy.get('.active').last().children().then(function(el){
           // expect(el.text()).to.eq('Home')
        //})
       // cy.contains('Home')
       /// contents() --- jquery()
       
        cy.get('#frame').then(function($iframe){
            let document = $iframe.contents()
            cy.wrap(document).find('body').as('iframebody')
        })
        cy.get('@iframebody').contains('Home').should('have.attr','href')
    })


    it('managing iframe - javascript', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get("#frame").then(function(iframe){
            let document = iframe[0].contentDocument
            cy.wrap(document).find('body').as('iframebody')
        })
        cy.get('@iframebody').contains('Home').should('have.attr','href')
    })


    it('managing iframe - javascript', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        bodyExist('frame').contains('Home').should('have.attr','href')  
    })
})

