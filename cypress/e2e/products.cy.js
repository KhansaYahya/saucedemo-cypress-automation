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

  it('Should open product and add to cart', () => {

    productsPage.clickFirstProduct()

    cy.url().should('include', 'inventory-item')

    productsPage.verifyProductDetails()

    productsPage.addToCart()

    productsPage.verifyCartBadge()

    productsPage.openCart()

    productsPage.verifyProductInCart()

  })

})
