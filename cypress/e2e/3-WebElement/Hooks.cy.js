//const { beforeEach } = require("mocha")

before(function(){
    cy.log('I will run at the first')
})

after(function(){
    cy.log('I will run at the last')
})
beforeEach(function(){
    cy.log('I will run before each testcase')
})
afterEach(function(){
    cy.log('I will run after each testcase')
})
it('test case one',function(){
    cy.log('Testcase one passed')
})
it('test case two',function(){
    cy.log('Testcase two passed')
})