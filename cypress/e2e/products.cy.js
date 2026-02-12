import LoginPage from '../pages/LoginPage'
import ProductsPage from '../pages/ProductsPage'

describe('Product Navigation Test', () => {

  const loginPage = new LoginPage()
  const productsPage = new ProductsPage()

  beforeEach(() => {
    loginPage.visit()
    loginPage.enterUsername('standard_user')
    loginPage.enterPassword('secret_sauce')
    loginPage.clickLogin()
  })

  it('Should open product detail page', () => {
    productsPage.clickFirstProduct()

    cy.url().should('include', 'inventory-item')

    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
  })

})
