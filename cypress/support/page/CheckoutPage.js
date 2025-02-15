class CheckoutPage {
    visitCart() {
        cy.visit('https://automationexercise.com/view_cart');
        cy.wait(3000);
        cy.get('.cart_description', { timeout: 30000 }).should('be.visible');
    }

    proceedToCheckout() {
        cy.contains('Proceed To Checkout', { timeout: 30000 }).should('be.visible').click();
        cy.wait(3000);
        cy.url().should('include', 'payment');
    }

    fillPaymentDetails() {
        cy.get('[data-qa="name_on_card"]', { timeout: 30000 }).should('be.visible').type('Emu Dummy');
        cy.get('[data-qa="card_number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry_month"]').select('12');
        cy.get('[data-qa="expiry_year"]').select('2025');
        cy.get('[data-qa="submit_payment"]').click();
    }

    verifyOrderConfirmation() {
        cy.contains('Your order has been placed successfully!', { timeout: 30000 }).should('be.visible');
    }
}

export default new CheckoutPage();
