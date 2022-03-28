describe('pruebas de búsqueda', function(){
    it('caso 1', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
    })
})