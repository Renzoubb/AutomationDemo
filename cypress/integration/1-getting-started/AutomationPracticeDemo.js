describe('flow automationPractice',function(){
    it('flow test 1', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button > span').click();
        cy.wait(10000);
        cy.get('.continue > span').click();
        cy.get('[title="View my shopping cart"]').click();
        cy.get('.cart_description > .product-name > a').contains('Printed Summer Dress');
    
    }) 
})