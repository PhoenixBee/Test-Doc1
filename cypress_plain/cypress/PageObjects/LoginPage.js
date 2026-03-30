class LoginPage
{
    txtUsername = '[data-test="username"]';
    txtPassword = '[data-test="password"]';
    btnClick = '[data-test="login-button"]';

    setUsername(username){
        cy.get(this.txtUsername).type(username);
    }

    setPassword(password){
        cy.get(this.txtPassword).type(password);
    }

    clickLogIn(){
        cy.get(this.btnClick).click();
    }
}

export default LoginPage;