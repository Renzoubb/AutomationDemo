describe('flow test',function(){
    it('flow test 1', function(){
        cy.visit('https://www.jumbo.com.ar/');
        cy.get('#search-autocomplete-input').type('canarias');
        cy.get('.see-all > span').click();
        cy.wait(10000);
        cy.get('.product-item__add-to-cart > :nth-child(5)').click();
        cy.get('.product-item__add-to-cart').click();
        cy.wait(10000);
        cy.get('.type-selector__buttons > :nth-child(2)').click();
        cy.get('#react-select-2--value > .Select-placeholder').click();
        cy.get('#react-select-2--option-3').click();
        cy.get('.Select-placeholder').click();
        cy.get('#react-select-3--option-1').click();
        cy.get('.shipping-preference__submit').click();
        cy.wait(10000);
        cy.get('#header__main-nav > .red').click();
        cy.get('.center > #minicart-navigation > .minicart__body > .minicart__items-wrapper > .minicart__products-wrapper > .minicart__products > .product-item > .product-item__info > .product-item__name').contains('Yerba Mate Canarias 500 Gr') ;  
        
    }) 
})



