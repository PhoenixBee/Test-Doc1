import LoginPage from "../../PageObjects/LoginPage";
import Delay from "../../PageObjects/Delay";

describe('Checkout', () => {
    const loginPage = new LoginPage();
    const delay = new Delay();

    beforeEach(() => {
        cy.visit ('/');
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.validUser.username);
            loginPage.setPassword(data.validUser.password);
            loginPage.clickLogIn();
            cy.wait(1500)
        }))
    })
        it('Checkout Cart', () => {
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
        cy.get('[data-test="shopping-cart-link"]').click()
        delay.waitForASecond()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Enyata')
        delay.waitForASecond()
        cy.get('[data-test="lastName"]').type('Assessment')
        delay.waitForASecond()
        cy.get('[data-test="postalCode"]').type('100001')
        delay.waitForASecond()
        cy.get('[data-test="continue"]').click()
        delay.waitForASecond()
        cy.get('[data-test="finish"]').scrollIntoView()
        delay.waitForOneAndHalfSecond()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="shopping-cart-link"]').should('have.text', '')
        delay.waitForOneAndHalfSecond()
        cy.get('[data-test="back-to-products"]').click()
        });
})