class ProductsPage {

  clickFirstProduct() {
    cy.get('.inventory_item_name').first().click()
  }

  verifyProductDetails() {
    cy.get('.inventory_details_name').should('be.visible')
    cy.get('.inventory_details_price').should('be.visible')
    cy.get('.inventory_details_desc').should('be.visible')
  }

  addToCart() {
    cy.get('button.btn_inventory').click()
  }

  verifyCartBadge() {
    cy.get('.shopping_cart_badge').should('contain', '1')
  }

  openCart() {
    cy.get('.shopping_cart_link').click()
  }

  verifyProductInCart() {
    cy.get('.inventory_item_name').should('be.visible')
  }

}

export default ProductsPage
