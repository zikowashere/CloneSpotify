describe('test Search fonctionalities', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/');
    cy.contains('Login With SiS Music').click();
    cy.origin('https://accounts.spotify.com/', () => {
      cy.get('input[data-testid="login-username"]').type('zakdaouma@gmail.com');
      cy.get('input[type="password"]').type('Mamanout3zadari');
      cy.contains('Se Connecter').click();
      cy.contains("J'ACCEPTE").click();
    });
  });
  //   it('search for an artist', () => {
  //     cy.get('input[type="text"]').type('linkin park');
  //     cy.get('button').contains('Artistes').click();
  //     cy.get('#artist').click();
  //     cy.get('#playButton').click();
  //   });
  it('search for tracks', () => {
    cy.get('input[type="text"]').type('ouenza');
    cy.get('button').contains('Titres').click();
    cy.get('#playButton').click();
  });
});
