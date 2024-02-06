/// <reference types="cypress" />

describe('verify the intercept', function () {
    it('verify the GET comment', function () {
        cy.intercept({
            url: 'https://jsonplaceholder.cypress.io/comments/1',
            method: 'GET'},{
            body:{
                "postId": 1,
                "id": 1,
                "name": "id labore ex et quam laborum",
                "email": "Eliseo@gardner.biz",
                "body": "pooja"
            }

        }).as('getComment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Get Comment').click()
        cy.wait('@getComment').then(function ({ response, request }) {
            cy.log(request)
            cy.log(response)
            expect(request.method).to.eq('GET')
            cy.get('.network-comment').should('have.text',response.body.body)
    
         })
       
    })

    it('verify the post comment',function(){
        cy.intercept({
            method:'POST',
            url:'https://jsonplaceholder.cypress.io/comments'
        }).as('Postcomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Post Comment').click()
        cy.wait('@Postcomment').then(function({response}){
           cy.log(response)
           expect(response.statusCode).to.eq(201)
           cy.get('.network-post-comment').should('have.text','POST successful!')

        })
    })

    it.only('verify the update comment',function(){
        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method:'PUT'
        }).as('Updatecomment')
        cy.visit('https://example.cypress.io/commands/network-requests')
        cy.contains('Update Comment').click()
        cy.wait('@Updatecomment').then(function({response}){
            cy.log(response)
            expect(response.statusCode).to.eq(200)

        })
    })

})