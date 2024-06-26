describe('Check if deadline works correctly', () => {
  it('should add an intime todo, also check if mat tooltip works fine', () => {
    cy.visit('http://localhost:4200');
    indexedDB.deleteDatabase('ngrx-todo-db');
    cy.get('#todo-title-input').type('Walk the dogs');
    cy.get('#set-deadline-btn').click();
    cy.get('.mat-calendar-next-button').click();
    cy.get('.mat-calendar-body-cell-container').first().click();
    cy.get('body').trigger('keydown', { keyCode: 27 });
    cy.wait(500);
    cy.get('#add-todo-btn').click();
    cy.get('.todo-list').should('contain.text', 'Walk the dogs');
    cy.get('.todo-item').first().should('not.have.class', 'overdue');
    cy.get('#days-left-indicator').trigger('mouseenter');
    cy.get('#days-left-indicator').trigger('onmouseover');
    cy.wait(500);
    cy.get('.mdc-tooltip').should('contain.text', 'days left');

    cy.clock(Date.UTC(new Date().getFullYear() + 1, 6, 23), ['Date']); //let's assume it's been 1 year awaiting;
    cy.visit('http://localhost:4200');
    cy.get('.todo-item').first().should('have.class', 'overdue');
  });

  it('should add an overdue todo', () => {
    cy.visit('http://localhost:4200');
    indexedDB.deleteDatabase('ngrx-todo-db');
    cy.get('#todo-title-input').type('Walk the dogs');
    cy.get('#add-todo-btn').click();
    cy.get('.todo-list').should('contain.text', 'Walk the dogs');
    cy.get('.todo-item').first().should('have.class', 'overdue');
  });
});
