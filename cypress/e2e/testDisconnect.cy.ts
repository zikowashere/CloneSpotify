describe('test to disconnect from app ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('Log In').click();
    cy.origin('https://accounts.spotify.com/', () => {
      cy.get('input[data-testid="login-username"]').type('zakdaouma@gmail.com');
      cy.get('input[type="password"]').type('Mamanout3zadari');
      cy.contains('Se Connecter').click();
      cy.contains("J'ACCEPTE").click();
    });
  });
  it('disconnect from app ', () => {
    cy.get('#disconnect').click();
    cy.contains('Log out').click();
    cy.contains('Log In').should('exist');
  });
});
