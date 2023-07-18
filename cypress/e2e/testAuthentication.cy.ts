describe('test authentication', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('Login With SiS Music').click();
  });
  it('test authentication to spotify api with username and password', () => {
    cy.origin('https://accounts.spotify.com/', () => {
      cy.get('input[data-testid="login-username"]').type('zakdaouma@gmail.com');
      cy.get('input[type="password"]').type('Mamanout3zadari');
      cy.contains('Se Connecter').click();
      cy.contains("J'ACCEPTE").click();
    });
  });
});
