class RegisterPage {
    get tryRegisterButton() { return $('//a[@href="/register"]'); }
    get storeNameField() { return $('#name'); }
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get registerButton() { return $('//button[text()="daftar"]'); }
    get errorMessage() { return $('//div[@class="chakra-alert css-qwanz3"]'); }  // XPath for the error message

    clickTryRegisterButton() {
        this.tryRegisterButton.waitForDisplayed({ timeout: 5000 });
        this.tryRegisterButton.click();
    }

    enterStoreName(name) {
        this.storeNameField.waitForDisplayed({ timeout: 5000 });
        this.storeNameField.setValue(name);
    }

    enterEmail(email) {
        this.emailField.waitForDisplayed({ timeout: 5000 });
        this.emailField.setValue(email);
    }

    enterPassword(password) {
        this.passwordField.waitForDisplayed({ timeout: 5000 });
        this.passwordField.setValue(password);
    }

    clickRegisterButton() {
        this.registerButton.waitForDisplayed({ timeout: 5000 });
        this.registerButton.click();
    }
}

module.exports = new RegisterPage();
