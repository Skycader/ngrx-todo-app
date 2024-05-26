it('should test the request info', () => {
  cy.visit('http://localhost:4200');
  cy.get('#todo-title-input').type('Walk the dogs');
  cy.get('#add-todo-btn').click();
  cy.get('.todo-list').should('contain.text', 'Walk the dogs');

  cy.get('#check-todo-btn').click();

  cy.get('.todo-item').should('have.class', 'mat-primary');

  cy.get('#delete-todo-btn').click();

  cy.get('.todo-list').should('not.contain.text', 'Walk the dogs');
});
