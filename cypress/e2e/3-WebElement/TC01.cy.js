

describe('verify the webelements',() =>{
  
    it('verify contactus form',() =>{
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('input[name="first_name"]').type('Pooja')
        cy.get('input[name="last_name"]').type('Fulzele')
        cy.get('input[name="email"]').type('poojafulzele@gmail.com')
        cy.get('textarea[name="message"]').type('I am learning JS')
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')

    })
})  