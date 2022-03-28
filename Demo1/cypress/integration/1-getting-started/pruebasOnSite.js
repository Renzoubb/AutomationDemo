describe('Pruebas en un sitio', function(){
    it('search for dress',function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('hat');  
        cy.get('#searchbox > .btn').click();
        cy.get('.last-line > .product-container > .right-block > .button-container > .lnk_view > span').contains('NoMore' )
    })
})