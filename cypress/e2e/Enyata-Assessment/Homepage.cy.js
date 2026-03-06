import LoginPage from "../../PageObjects/LoginPage";
import Delay from "../../PageObjects/Delay";

describe('Homepage (Filter, Menu and Social)', () => {
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

    it('Filter by Name: Z to A ', () => {
        delay.waitForASecond()
        cy.get('.product_sort_container').select('Name (Z to A)');
       delay.waitForOneAndHalfSecond()
    });

    it('Filter by Name: A to Z ', () => {
        delay.waitForASecond()
        cy.get('.product_sort_container').select('Name (Z to A)');
        delay.waitForOneAndHalfSecond()
        cy.get('.product_sort_container').select('Name (A to Z)');
        delay.waitForOneAndHalfSecond()
    });

    it('Filter by Price: High to Low ', () => {
        delay.waitForASecond()
        cy.get('.product_sort_container').select('Price (high to low)');
        delay.waitForOneAndHalfSecond()
    });

    it('Filter by Price: Low to High ', () => {
        delay.waitForASecond()
        cy.get('.product_sort_container').select('Price (low to high)');
        delay.waitForOneAndHalfSecond()
    });

    it('Navigate to Social Media: X (formerly Twitter) ', () => {
        delay.waitForASecond()
        cy.get('[data-test="social-twitter"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="social-twitter"]').click()
    });

    it('Navigate to Social Media: Facebook', () => {
        delay.waitForASecond()
        cy.get('[data-test="social-facebook"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="social-facebook"]').click()
    });

    it('Navigate to LinkedIn', () => {
        delay.waitForASecond()
        cy.get('[data-test="social-linkedin"]').scrollIntoView()
        delay.waitForASecond()
        cy.get('[data-test="social-linkedin"]').click()
    });
})