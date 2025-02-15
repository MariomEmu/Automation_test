///<reference types="cypress" />

import SignUpPage from '../support/pages/SignUpPage';
import ProductCategoryPage from '../support/pages/ProductCategoryPage';
import ProductDetailPage from '../support/pages/ProductDetailPage';
import CheckoutPage from '../support/pages/CheckoutPage';



describe('Sign-Up, Product Selection, and Cart Update', () => {
    it('Completes sign-up, selects a category, and updates cart', () => {
        // Sign-up flow
        SignUpPage.visit();
        SignUpPage.fillSignUpForm('emu', `emu${Date.now()}@gmail.com`, 'emu123', 'Mariom', 'Bibi', 'Mirpur', 'Mirpur state', 'Dhaka City', '1216', '01334808623');
        SignUpPage.verifyAccountCreated();

        // Product category selection flow
        ProductCategoryPage.visitHomePage();
        ProductCategoryPage.selectCategory('Men');
        ProductCategoryPage.selectProduct('Jeans');
        ProductCategoryPage.verifyProductCategoryPage();

        // Product details and cart update
        ProductDetailPage.viewProductDetails();
        ProductDetailPage.verifyProductDetailsPage();
        ProductDetailPage.changeProductQuantity('2');
        ProductDetailPage.addToCart();

        // Checkout flow
        CheckoutPage.visitCart();
        CheckoutPage.proceedToCheckout();
        CheckoutPage.fillPaymentDetails();
        CheckoutPage.verifyOrderConfirmation();
    });
});
