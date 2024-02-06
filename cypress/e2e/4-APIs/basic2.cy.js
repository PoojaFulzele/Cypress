/// <reference types="cypress" />

describe('verify the API for GET POST PUT DELETE',function(){
    it('verify the total no of users per page',function(){
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            cy.log(response.per_page)
            cy.log(response.body.data.length)
            expect(response.body.data.length).to.equal(response.body.per_page)

        })
    })

    it('verify the user with name George',function(){
        let username = 'George'
        let Flaguser = false
        cy.request({
            method:'GET',
            url:'https://reqres.in/api/users?page=2'
        }).then(function(response){
            response.body.data.forEach(element => {
                if(element.first_name == username ){
                    Flaguser = true
                    return
                }
                
            });
        }).then(function(){
            expect(Flaguser).to.eq(true)
        })
    })

    it('verify the POST request',function(){
        let info= {
            'name' : 'Pooja',
            'job' : 'Tester'

        }
        cy.request({
            method:'POST',
            url:'https://reqres.in/api/users?page=2',
            body: info

        })
        .then(function(response){
            cy.log(response.body)
            expect(response.body).to.have.keys(["name","job","id","createdAt"])
            expect(response.body.name).to.eq(info.name)
            expect(response.body.job).to.eq(info.job)
        })
    })
})