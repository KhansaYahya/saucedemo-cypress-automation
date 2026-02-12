class ProductsPage {

  clickFirstProduct() {
    cy.get('.inventory_item_name').first().click()
  }

  verifyProductDetails() {
    cy.get('.inventory_details_name').should('be.visible')
  }

}

export default ProductsPage
