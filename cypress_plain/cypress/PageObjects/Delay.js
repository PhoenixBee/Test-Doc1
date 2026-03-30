class Delay {
    waitForASecond() {
        cy.wait(1000);
    }

    waitForOneAndHalfSecond() {
        cy.wait(1500);
    }

    waitForTwoSeconds() {
        cy.wait(2000);
    }

    waitForThreeSeconds() {
        cy.wait(3000);
    }
}

export default Delay;
