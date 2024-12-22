class LoginPage {
    get emailField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get loginButton() { return $('//button[text()="login"]'); }
    get errorMessage() { return $('//div[contains(@class, "chakra-alert") and contains(text(), "incorrect password")]'); }

    enterEmail(email) {
        this.emailField.waitForDisplayed({ timeout: 5000 });
        this.emailField.setValue(email);
    }

    enterPassword(password) {
        this.passwordField.waitForDisplayed({ timeout: 5000 });
        this.passwordField.setValue(password);
    }

    clickLoginButton() {
        this.loginButton.waitForDisplayed({ timeout: 5000 });
        this.loginButton.click();
    }

    // Wait for the error message to appear in case of failed login
    waitForErrorMessage() {
        this.errorMessage.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new LoginPage();
