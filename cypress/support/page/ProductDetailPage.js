class ProductDetailPage {
    viewProductDetails() {
        cy.get('.product-image-wrapper').first().within(() => {
            cy.get('a[href*="product_details"]').should('be.visible').click();
        });
    }

    verifyProductDetailsPage() {
        cy.url().should('include', 'product_details');
    }

    changeProductQuantity(quantity) {
        cy.get('#quantity').clear().type(quantity);
    }

    addToCart() {
        cy.get('.btn.btn-default.cart', { timeout: 30000 }).should('be.visible').click();
        cy.contains('Added!', { timeout: 30000 }).should('be.visible');
    }
}

export default new ProductDetailPage();
