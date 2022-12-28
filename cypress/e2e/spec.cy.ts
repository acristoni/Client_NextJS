describe('e2e app spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Index page can be visited', () => {})
  it('Should render Users in a users list', () => {
    cy.get('[data-testid="RowUser-2"]').should('be.visible')
  })
  it('Click in one user to go to a user detail', () => {
    cy.get('[data-testid="RowUser-2"]').click()
    cy.url().should('include', 'defunkt')
  })
  it('Click in one repository from user repositories list and open another tab, with GitHub repository page', () => {
    cy
      .get('[data-testid="RowUser-2"]')
      .click()
    cy
      .url()
      .should('include', 'defunkt')
    cy
      .get('[data-testid="RowRepo-3594"]')
      .click()
  })
})

export{}