class SignUpPage {
    visit() {
        cy.visit('https://automationexercise.com/login');
    }

    fillSignUpForm(name, email, password, firstName, lastName, address, state, city, zipcode, mobile) {
        cy.get('[data-qa="signup-name"]').type(name);
        cy.get('[data-qa="signup-email"]').type(email);
        cy.get('[data-qa="signup-button"]').click();
        cy.get('#id_gender2').click({ force: true });
        cy.get('[data-qa="password"]').type(password);
        cy.get('[data-qa="first_name"]').type(firstName);
        cy.get('[data-qa="last_name"]').type(lastName);
        cy.get('[data-qa="address"]').type(address);
        cy.get('[data-qa="state"]').type(state);
        cy.get('[data-qa="city"]').type(city);
        cy.get('[data-qa="zipcode"]').type(zipcode);
        cy.get('[data-qa="mobile_number"]').type(mobile);
        cy.get('[data-qa="days"]').select('10', { force: true });
        cy.get('[data-qa="months"]').select('January', { force: true });
        cy.get('[data-qa="years"]').select('2000', { force: true });
        cy.get('[data-qa="create-account"]').click();
    }

    verifyAccountCreated() {
        cy.contains('Account Created', { timeout: 50000 }).should('be.visible');
    }
}

export default new SignUpPage();
