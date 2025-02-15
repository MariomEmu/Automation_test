class ProductCategoryPage {
    visitHomePage() {
        cy.visit('https://automationexercise.com');
        cy.wait(3000);
    }

    selectCategory(categoryName) {
        cy.contains(categoryName, { timeout: 30000 }).should('be.visible').click({ force: true });
    }

    selectProduct(productName) {
        cy.contains(productName, { timeout: 30000 }).should('be.visible').click({ force: true });
    }

    verifyProductCategoryPage() {
        cy.url().should('include', 'category_products');
        cy.contains('Men - Jeans', { timeout: 30000 }).should('be.visible');
    }
}

export default new ProductCategoryPage();
