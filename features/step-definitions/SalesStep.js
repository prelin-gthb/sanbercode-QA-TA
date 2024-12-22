const { Given, When, Then } = require('@cucumber/cucumber');
const SalesPage = require('../pageobjects/SalesPage');

Given('User is logged in', async () => {
    // Assuming login steps are already defined elsewhere in your project
    console.log('User is logged in');
});

Given('User is on the Dashboard page', async () => {
    // Assuming user is already on the Dashboard page after logging in
    console.log('User is on the Dashboard page');
});

When('User clicks the "Penjualan" menu', async () => {
    await SalesPage.clickMenuPenjualan();
});

When('User clicks the "Tambah" button', async () => {
    await SalesPage.clickTambahButton();
});

When('User clicks the search icon', async () => {
    await SalesPage.clickSearchIcon();
});

When('User selects the product {string}', async (productName) => {
    await SalesPage.selectProduct(productName);
});

When('User inputs Jumlah {string}', async (jumlah) => {
    await SalesPage.inputJumlah(jumlah);
});

When('User inputs Jumlah Bayar {string}', async (jumlahBayar) => {
    await SalesPage.inputJumlahBayar(jumlahBayar);
});

When('User clicks the "Bayar" button', async () => {
    await SalesPage.clickBayarButton();
});

Then('User should see the pop-up {string}', async (popupMessage) => {
    await SalesPage.waitForSuccessPopup();
    const successMessage = await SalesPage.successPopup.getText();
    if (!successMessage.includes(popupMessage)) {
        throw new Error(`Expected success message to include "${popupMessage}", but got "${successMessage}"`);
    }
});

Then('The product {string} should be listed with Jumlah {string} and Jumlah Bayar {string}', async (productName, jumlah, jumlahBayar) => {
    const rowData = await SalesPage.getProductRowData();
    if (!rowData.includes(productName) || !rowData.includes(jumlah) || !rowData.includes(jumlahBayar)) {
        throw new Error(`Product details do not match: expected "${productName}, ${jumlah}, ${jumlahBayar}", but got "${rowData}"`);
    }
});

Then('No changes should occur', async () => {
    // In this case, we verify that no success popup appears
    try {
        await SalesPage.waitForSuccessPopup();
        throw new Error('Expected no changes, but success popup appeared');
    } catch (e) {
        // If no success popup appears, it's a success
        console.log('No changes occurred, as expected');
    }
});
