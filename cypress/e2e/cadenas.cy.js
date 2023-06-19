describe("Cadenas", () => {
    it("mostrar el conteo de una palabra", () => {
      cy.visit("/");
      cy.get("#palabra").type("hola");
      cy.get("#contar-button").click();
      cy.get("#resultado-div").should('have.text','{"hola":1}');
    });
    it("mostrar el conteo de una frase separada de espacios", () => {
        cy.visit("/");
        cy.get("#palabra").type("hola maria Hola ana");
        cy.get("#contar-button").click();
        cy.get("#resultado-div").should('have.text','{"hola":2,"maria":1,"ana":1}');
      });
      it("mostrar el conteo de una frase separada de comas y puntos", () => {
        cy.visit("/");
        cy.get("#palabra").type("hola maria.Hola,ana");
        cy.get("#contar-button").click();
        cy.get("#resultado-div").should('have.text','{"hola":2,"maria":1,"ana":1}');
      });
  });
  