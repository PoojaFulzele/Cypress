/// <reference types="cypress" />

describe('traverse method()',function(){
    //it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
      //  cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
      //  cy.get('#sugar').prevUntil('#coffee').should('have.length',3)
   // })

   // it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command',function(){
       // cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
       // cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
   // })

    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().first().should('have.attr','id','coffee')
    })

    it('To get the last DOM element within elements, use the .last() command',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().last().should('have.attr','id','sugar')
    })

    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(3).should('have.attr','id','espresso')
    })

    it('To get parents DOM element of elements, use the .parents() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').parents().should('have.attr','class','traversal-food-list')
    
    })
})