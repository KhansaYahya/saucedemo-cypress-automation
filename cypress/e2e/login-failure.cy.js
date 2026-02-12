import LoginPage from '../pages/LoginPage'

describe('Login Failure Test', () => {

  const loginPage = new LoginPage()

  it('Should show error for invalid login', () => {
    loginPage.visit()
    loginPage.enterUsername('invalid_user')
    loginPage.enterPassword('wrong_password')
    loginPage.clickLogin()

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username and password do not match')
  })

})
