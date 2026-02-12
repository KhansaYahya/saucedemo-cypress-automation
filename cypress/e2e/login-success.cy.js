import LoginPage from '../pages/LoginPage'

describe('Login Success Test', () => {

  const loginPage = new LoginPage()

  it('Should login successfully', () => {
    loginPage.visit()
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()

    // URL validation
    cy.url().should('include', 'inventory')

    // Page title validation
    cy.get('.title').should('have.text', 'Products')

    // Products list visible
    cy.get('.inventory_item').should('have.length.greaterThan', 0)
  })

})
