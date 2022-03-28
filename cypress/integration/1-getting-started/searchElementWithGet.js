describe('ways to find a element', function(){
    it('search', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.search_query.form-control.ac_input').type('hola'); //búsqueda por clase.
        cy.get('#search_query_top').type('como te va'); //búsqueda por id
        

    })
})