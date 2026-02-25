class InventoryPage {
  addFirstProductToCart() {
    cy.contains("Add to cart").first().click();
  }

  validateCartBadge(count) {
    cy.get(".shopping_cart_badge")
      .should("be.visible")
      .and("contain", count);
  }
}

export default new InventoryPage();