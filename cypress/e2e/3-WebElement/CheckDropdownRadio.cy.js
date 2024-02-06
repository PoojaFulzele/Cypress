/// <reference types = "cypress"/>
describe('Checkbox Dropdown and Radio buttons',function(){


    it('Selecting an option from dropdown',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('C#')
        cy.get('#dropdowm-menu-1').should('have.value','c#')
        cy.get('#dropdowm-menu-2').select('Eclipse')
        cy.get('#dropdowm-menu-2').should('have.value','eclipse')
 })
    it('Selecting the Checkbox',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value = "option-2"]').click()
        cy.get('input[value = "option-2"]').should('be.checked')
        cy.get('input[value = "option-3"]').check()
        cy.get('input[value = "option-3"]').should('be.checked')
        cy.get('input[value = "option-3"]').uncheck()
        cy.get('input[value = "option-3"]').should('not.be.checked')

 
    }) 

    it('Selecting Radio button',function(){
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('input[value = "green"]').check().should('be.checked')
        cy.get('input[value = "blue"]').should('not.be.checked')

    })
})