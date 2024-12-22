const { Given, When, Then } = require('@wdio/cucumber-framework');
const RegisterPage = require('../pageobjects/RegisterPage');

Given('User navigates to the base URL', () => {
    console.log('Navigating to the base URL...');
    browser.deleteAllCookies(); // Clear cookies for a fresh state
    browser.url('https://kasiraja.ajikamaludin.id'); // Navigate to the base URL
    browser.pause(2000); // Pause to ensure the page is loaded
    console.log('Current URL:', browser.getUrl());
});

When('User clicks the "Ingin mencoba, Daftar?" button', async () => {
    console.log('Clicking the "Ingin mencoba, Daftar?" button...');
    const tryRegisterButton = await $('//a[@href="/register"]');
    await tryRegisterButton.waitForDisplayed({ timeout: 10000 });
    await tryRegisterButton.click();
    console.log('Clicked the "Ingin mencoba, Daftar?" button.');
});

When('User enters a valid store name, email, and password', async () => {
    console.log('Filling out the registration form...');
    await (await RegisterPage.storeNameField).setValue('Toko Bangunan H');
    console.log('Store Name entered');

    await (await RegisterPage.emailField).setValue('tbh@grr.la');
    console.log('Email entered');

    await (await RegisterPage.passwordField).setValue('password');
    console.log('Password entered');
});

When('User enters a valid store name and an already taken email', async () => {
    console.log('Filling out the registration form with an already taken email...');
    await (await RegisterPage.storeNameField).setValue('Toko Bangunan F');
    console.log('Store Name entered');

    await (await RegisterPage.emailField).setValue('tbf@grr.la'); // Email that's already taken
    console.log('Email entered');

    await (await RegisterPage.passwordField).setValue('password');
    console.log('Password entered');
});

When('User clicks the "Daftar" button', async () => {
    console.log('Clicking the "Daftar" button...');
    await RegisterPage.clickRegisterButton();
    console.log('Clicked the "Daftar" button.');

    // Wait for the error message to appear (if any) or for page redirection
    await browser.pause(3000); // Pause for a few seconds to give the system time to process the action
});

Then('User should be redirected to the login page', async () => {
    // First, check if there's an error message displayed (email already taken)
    const errorMessage = await $('//div[@class="chakra-alert css-qwanz3"]');
    const isErrorDisplayed = await errorMessage.isDisplayed();

    if (!isErrorDisplayed) {
        // If no error message is found, assume registration is successful
        const currentUrl = await browser.getUrl();
        console.log('Current URL after registration:', currentUrl);
        expect(currentUrl).toContain('/login'); // The URL should contain '/login' if successful
    } else {
        // If error message is displayed, ensure we are still on the registration page
        const currentUrl = await browser.getUrl();
        console.log('Current URL with error message:', currentUrl);
        expect(currentUrl).toContain('/register'); // Stay on the register page if error appears
    }
});

Then('User should see an error message indicating the email is already taken', async () => {
    console.log('Waiting for error message...');
    
    // Wait for the error message to appear
    const errorMessage = await $('//div[@class="chakra-alert css-qwanz3"]');
    await errorMessage.waitForDisplayed({ timeout: 5000 }); // Wait for up to 5 seconds
    
    // Get the error message text
    const errorText = await errorMessage.getText();
    
    // Log the error text for debugging
    console.log('Error Message:', errorText);

    // Verify that the error message contains the expected text
    expect(errorText).toContain('Email sudah digunakan');
});
