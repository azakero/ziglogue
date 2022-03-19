/// <reference types="cypress" />

describe( 'Products', () => {

    it( 'should test the loading container and the products', () => {

        let sendResponse;

        const trigger = new Promise( ( resolve ) => {
            sendResponse = resolve;
        } );

        cy.visit( '/' );

        cy.intercept( 'http://localhost:3001/api/phones', ( request ) => {
            return trigger.then( () => {
                request.reply();
            } );
        } );


        cy.get( '[data-cy="loaderContainer"]' ).should( 'be.visible' ).then( () => {

            sendResponse();

            cy
                .get( '[data-cy="loaderContainer"]' )
                .should( 'not.exist' );

            cy
                .get( '[data-cy="productsContainer"]' )
                .should( 'be.visible' )
                .and( 'contain', 'Samsung Galaxy S22 Ultra' )
                .and( 'contain', 'iPhone 13 Pro Max' );

            cy
                .get( 'img', { includeShadowDom: true } )
                .filter( '[src]' )
                .wait( 2000 )
                .filter( ':visible' )
                .should( ( $imgs ) => $imgs.map( ( i, img ) => expect( img.naturalWidth ).to.be.greaterThan( 0 ) ) );

            cy
                .contains( '[data-cy="viewProductBtn"]', 'View Specifications' )
                .should( 'be.visible' )
                .click()
                .wait( 2000 );

            cy
                .get( '[data-cy="productContainer"]' )
                .should( 'be.visible' );

            cy
                .get( 'img', { includeShadowDom: true } )
                .filter( '[src]' )
                .wait( 2000 )
                .filter( ':visible' )
                .should( ( $imgs ) => $imgs.map( ( i, img ) => expect( img.naturalWidth ).to.be.greaterThan( 0 ) ) );

            cy
                .contains( '[data-cy="productTitle"]', 'Samsung Galaxy S22 Ultra' )
                .should( 'be.visible' );

            cy
                .contains( '[data-cy="goBackBtn"]', 'Go Back' )
                .should( 'be.visible' )
                .click();

        } );

    } );

} );