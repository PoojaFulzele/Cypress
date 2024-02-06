/// <reference types = "cypress"/>

describe('webelement methods', function(){
  
        it('click on the function',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type('Pooja')
            cy.get('input[name="last_name"]').type('Fulzele')
            cy.get('input[name="email"]').type('poojafulzele@gmail.com')
            cy.get('textarea[name="message"]').type('I am learning JS')
            cy.get('input[type="submit"]').click()
            cy.get('h1').should('exist')
        })

        it('type on input element',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('input[name="first_name"]').type('Pooja')
            cy.get('input[name="last_name"]').type('Fulzele')
            cy.get('input[name="email"]').type('poojafulzele@gmail.com')
            cy.get('textarea[name="message"]').type('I am learning JS')
            cy.get('input[type="submit"]').click()
        })

        it('clear the input field',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').as('FirstName')
            cy.get('@FirstName').type('Pooja')
            cy.get('@FirstName').clear()
            cy.get('@FirstName').should('have.text','')
        })

         // <h2 name="contactme" class="section_header">CONTACT US</h2>

        it('getting attribute and verifying attribute',function(){
            cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('h2').should('have.attr','name')
            cy.get('h2').should('have.attr','class')
            cy.get('h2').should('have.attr','name','contactme')
            cy.get('h2').should('have.attr','class','section_header')
            cy.get('h2').invoke('attr','class').then(function(text){
                cy.log(text)
            })
            cy.get('h2').invoke('attr','name0').then(function(text){
                cy.log(text)
            })

        })

        it('element selected function',function(){
            cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('[value= "pumpkin"]').should('be.checked')

        })

        it('element selected function',function(){
            cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
            cy.get('[value= "cabbage"]').should('be.disabled')
     
})
})