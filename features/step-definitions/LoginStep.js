const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/LoginPage');

Given('User is on the login page', async () => {
    console.log('Navigating to the login page...');
    await browser.url('https://kasiraja.ajikamaludin.id');
    await browser.pause(2000); // Pause to ensure the page is loaded
    const currentUrl = await browser.getUrl();
    console.log('Current URL:', currentUrl);
    expect(currentUrl).toContain('/login'); // Verify user is on the login page
});

When('User enters a correct email and incorrect password', async () => {
    console.log('Entering credentials with incorrect password...');
    await (await LoginPage.emailField).setValue('tbf@grr.la'); // Use a valid email here
    await (await LoginPage.passwordField).setValue('incorrectpassword'); // Incorrect password
});

When('User enters a correct email and password', async () => {
    console.log('Entering credentials with correct password...');
    await (await LoginPage.emailField).setValue('tbf@grr.la'); // Use a valid email here
    await (await LoginPage.passwordField).setValue('password'); // Correct password
});

When('User clicks the "Login" button', async () => {
    console.log('Clicking the "Login" button...');
    await LoginPage.clickLoginButton();
});

Then('User should see an error message indicating incorrect password', async () => {
    const errorMessage = await $('//div[contains(@class, "chakra-alert") and contains(text(), "Kredensial yang Anda berikan salah")]');
    
    // Wait for the error message to appear (increase timeout if needed)
    await errorMessage.waitForDisplayed({
        timeout: 10000, // Wait for up to 10 seconds for the error message
        timeoutMsg: 'Error message indicating incorrect password was not displayed after 10 seconds'
    });

    // Get the error message text
    const errorText = await errorMessage.getText();
    console.log('Error message text:', errorText); // Log the error message for debugging

    // Verify that the error message contains the expected text
    expect(errorText).toContain('Kredensial yang Anda berikan salah');
});


Then('User should be redirected to the dashboard', async () => {
    console.log('Waiting for the user to be redirected to the dashboard...');
    
    // Wait for the dashboard page URL
    await browser.waitUntil(async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('/dashboard');
    }, {
        timeout: 10000, // Wait up to 10 seconds
        timeoutMsg: 'User was not redirected to the dashboard within 10 seconds'
    });

    const currentUrl = await browser.getUrl();
    console.log('Current URL:', currentUrl);
    expect(currentUrl).toContain('/dashboard'); // Verify the user is redirected to the dashboard

    // Add a delay to ensure the final page load is completed
    await browser.pause(2000); // Pause for 2 seconds to ensure the final redirect happens
});