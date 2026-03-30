import LoginPage from "../../PageObjects/LoginPage";
import Delay from "../../PageObjects/Delay";

describe('Login Tests - Data Driven with POM', () => {
    const loginPage = new LoginPage();
    const delay = new Delay();

    beforeEach(() => {
        cy.visit ('/');
    })

    it('Login with valid User', () => {
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.validUser.username)
            loginPage.setPassword(data.validUser.password)
            loginPage.clickLogIn()
            delay.waitForASecond()
        }))
    });

    it('Login with valid User2', () => {
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.validUser2.username)
            loginPage.setPassword(data.validUser2.password)
            loginPage.clickLogIn()
            delay.waitForASecond()
        }))
    });

    it('Login with invalid User', () => {
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.invalidUser.username)
            loginPage.setPassword(data.invalidUser.password)
            loginPage.clickLogIn();
           cy.get('[data-test="error"]').should('be.visible').and('contain',' Username and password do not match any user in this service');
           delay.waitForASecond()
        }))
    });

    it('Logout functionality', () => {
        cy.fixture('logindata').then((data=>{
            loginPage.setUsername(data.validUser.username)
            loginPage.setPassword(data.validUser.password)
            loginPage.clickLogIn();
            delay.waitForASecond()
            cy.get('#react-burger-menu-btn').click()
            delay.waitForASecond()
            cy.get('[data-test="logout-sidebar-link"]').click()
        }))
    });
});

