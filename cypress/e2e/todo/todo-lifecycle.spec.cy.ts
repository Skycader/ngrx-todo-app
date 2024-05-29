describe('Full todo lifecycle checkout', () => {
  it('should add a new todo', () => {
    cy.visit('http://localhost:4200');
    indexedDB.deleteDatabase('ngrx-todo-db');
    cy.get('#todo-title-input').type('Walk the dogs');
    cy.get('#add-todo-btn').click();
    cy.get('.todo-list').should('contain.text', 'Walk the dogs');
  });

  it('should check the created todo', () => {
    cy.visit('http://localhost:4200');

    cy.get('#check-todo-btn').click();
    cy.get('.todo-item').should('have.class', 'done');
  });

  it('should uncheck the created todo', () => {
    cy.visit('http://localhost:4200');

    cy.get('#uncheck-todo-btn').click();
    cy.get('.todo-item').should('have.class', 'undone');
  });

  it('should remove the checked todo', () => {
    cy.visit('http://localhost:4200');

    cy.get('#delete-todo-btn').click();
    cy.get('.todo-list').should('not.contain.text', 'Walk the dogs');
  });
});
