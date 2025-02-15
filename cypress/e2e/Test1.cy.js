///<reference types="cypress" />

describe('SignUpPage, productCategoryPage, productDetailPage and checkoutPage', () => {
    it('Completes sign-up, selects a category, productDetail and updates cart', () => {
        cy.visit('https://automationexercise.com/login');

      
        cy.get('[data-qa="signup-name"]').type('emu');
        cy.get('[data-qa="signup-email"]').type(`emu${Date.now()}@example.com`);
        cy.get('[data-qa="signup-button"]').click();

        
        cy.get('#id_gender1').click({ force: true });

        // Fill in required fields
        cy.get('[data-qa="password"]').type('emu123');
        cy.get('[data-qa="first_name"]').type('Mariom');
        cy.get('[data-qa="last_name"]').type('Bibi');
        cy.get('[data-qa="address"]').type('Mirpur');
        cy.get('[data-qa="state"]').type('Mirpur state');
        cy.get('[data-qa="city"]').type('Dhaka City');
        cy.get('[data-qa="zipcode"]').type('1216');
        cy.get('[data-qa="mobile_number"]').type('01334808623');

        // Fill in non-required fields (Date of Birth)
        cy.get('[data-qa="days"]').select('10', { force: true });
        cy.get('[data-qa="months"]').select('January', { force: true });
        cy.get('[data-qa="years"]').select('2000', { force: true });

        // Submit the form
        cy.get('[data-qa="create-account"]').click();

        // Verify account creation
        cy.contains('Account Created', { timeout: 50000 }).should('be.visible');


        // Product Category
        cy.visit('https://automationexercise.com'); // Go to the home page
        cy.wait(3000);

    
        cy.contains('Men', { timeout: 30000 }).should('be.visible').click({ force: true });
        cy.wait(2000);

      
        cy.contains('Jeans', { timeout: 30000 }).should('be.visible').click({ force: true });
        cy.url().should('include', 'category_products'); 
        cy.contains('Men - Jeans', { timeout: 30000 }).should('be.visible');

        // View and Update Product Detail
        cy.wait(3000);
        cy.get('.product-image-wrapper').first().within(() => {
            cy.get('a[href*="product_details"]').should('be.visible').click();
        });

        cy.url().should('include', 'product_details');
        cy.get('#quantity').clear().type('2');

        cy.get('.btn.btn-default.cart', { timeout: 30000 }).should('be.visible').click();
        cy.contains('Added!', { timeout: 30000 }).should('be.visible');



        // checkout to Cart
        cy.visit('https://automationexercise.com/view_cart'); 
        cy.wait(3000);
        cy.get('.cart_description', { timeout: 30000 }).should('be.visible');

        cy.contains('Proceed To Checkout', { timeout: 30000 }).should('be.visible').click();
        cy.wait(3000);
        cy.url().should('include', 'payment');

        cy.get('[data-qa="name_on_card"]', { timeout: 30000 }).should('be.visible').type('Emu Dummy');
        cy.get('[data-qa="card_number"]').type('123456789');
        cy.get('[data-qa="cvc"]').type('123');
        cy.get('[data-qa="expiry_month"]').select('12');
        cy.get('[data-qa="expiry_year"]').select('2025');
        cy.get('[data-qa="submit_payment"]').click();

        // Confirm order
        cy.contains('Your order has been placed successfully!', { timeout: 30000 }).should('be.visible');
    });
});
