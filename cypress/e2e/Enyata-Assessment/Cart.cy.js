import LoginPage from "../../PageObjects/LoginPage";
import Delay from "../../PageObjects/Delay";

describe('Cart (Add and Remove)', () => {
    const loginPage = new LoginPage();
    const delay = new Delay();

    beforeEach(() => {
        cy.visit ('/');
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.validUser.username);
            loginPage.setPassword(data.validUser.password);
            loginPage.clickLogIn();
            delay.waitForOneAndHalfSecond()
        }))
    })
        it('Add Product to Cart', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        delay.waitForASecond()
        cy.get('[data-test="shopping-cart-link"]').scrollIntoView()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
    });
        it('Remove Product from cart - Method 1', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        delay.waitForASecond()
        cy.get('[data-test="shopping-cart-link"]').scrollIntoView()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
        delay.waitForASecond()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        delay.waitForASecond()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        delay.waitForASecond()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        delay.waitForASecond()
        cy.get('[data-test="shopping-cart-link"]').scrollIntoView()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '')
    });

    it('Remove Product from cart - Method 2', () => {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        delay.waitForASecond()
        cy.get('[data-test="shopping-cart-link"]').scrollIntoView()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '3')
        delay.waitForASecond()
        cy.get('[data-test="shopping-cart-link"]').click()
        delay.waitForASecond()
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        delay.waitForASecond()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').click()
        delay.waitForASecond()
        cy.get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '')
        delay.waitForASecond()

    });

});