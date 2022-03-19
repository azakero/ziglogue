/// <reference types="cypress" />

describe( 'Logo', () => {

    beforeEach( () => {
        cy.visit( '/' );
    } );

    it( 'should render logo without crashing', () => {
        cy.contains( 'a', "ziglogue" ).should( 'be.visible' );
    } );

} );