const { Given, When, Then, And } = require('@cucumber/cucumber');
const AddProductPage = require('../pageobjects/AddProductPage');
const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const ProductsPage = require ('../pageobjects/ProductsPage');

// Background: User is logged in
Given('User is logged in', async () => {
    console.log('Logging in the user...');
    await browser.url('https://kasiraja.ajikamaludin.id');
    await LoginPage.enterEmail('tbf@grr.la');
    await LoginPage.enterPassword('password');
    await LoginPage.clickLoginButton();

    // Wait for the URL to contain '/dashboard' (ensuring redirection after login)
    await browser.waitUntil(async () => {
        const currentUrl = await browser.getUrl();
        return currentUrl.includes('/dashboard');
    }, {
        timeout: 10000, // Wait for up to 10 seconds
        timeoutMsg: 'User was not redirected to the dashboard within 10 seconds'
    });

    console.log('User logged in successfully and redirected to dashboard!');
});

// Scenario 1: User successfully adds a new product
Given('User is on the Dashboard page', async () => {
    console.log('Verifying user is on the dashboard page...');
    await DashboardPage.verifyOnDashboard();  // Verify user is on the dashboard page via URL
});

When('User clicks the "Produk" menu', async () => {
    await AddProductPage.clickMenuProduk();
});

When('User clicks the "Tambah" button', async () => {
    await AddProductPage.clickTambahButton();
});

When('User inputs Kode {string}', async (kode) => {
    await AddProductPage.inputKode(kode);
});

When('User inputs Nama {string}', async (nama) => {
    await AddProductPage.inputNama(nama);
});

When('User inputs Harga Beli {string}', async (hargaBeli) => {
    await AddProductPage.inputHargaBeli(hargaBeli);
});

When('User inputs Deskripsi {string}', async (deskripsi) => {
    await AddProductPage.inputDeskripsi(deskripsi);
});

When('User inputs Harga Jual {string}', async (hargaJual) => {
    await AddProductPage.inputHargaJual(hargaJual);
});

When('User inputs Stok {string}', async (stok) => {
    await AddProductPage.inputStok(stok);
});

When('User clicks the vertical ellipsis icon of Kategori', async () => {
    await AddProductPage.clickKategoriIcon();
});

When('User selects Kategori {string}', async (kategori) => {
    await AddProductPage.selectKategori(kategori);
});

When('User clicks the "Submit" button', async () => {
    await AddProductPage.clickSubmitButton();
});

Then('User should see the success toast message {string}', async (message) => {
    const toastMessage = await AddProductPage.successToastMessage.getText();
    expect(toastMessage).toContain(message);
});

Then('User should be redirected to the product list page', async () => {
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain('/products');
});

// Scenario 2: User did not input product's stock
Given('User is on the Produk page', async () => {
    await AddProductPage.navigateToProdukPage();
});

When('User clicks the "Tambah" button', async () => {
    await AddProductPage.clickTambahButton();
});

When('User inputs Kode {string}', async (kode) => {
    await AddProductPage.inputKode(kode);
});

When('User inputs Nama {string}', async (nama) => {
    await AddProductPage.inputNama(nama);
});

When('User inputs Deskripsi {string}', async (deskripsi) => {
    await AddProductPage.inputDeskripsi(deskripsi);
});

When('User inputs Harga Beli {string}', async (hargaBeli) => {
    await AddProductPage.inputHargaBeli(hargaBeli);
});

When('User inputs Harga Jual {string}', async (hargaJual) => {
    await AddProductPage.inputHargaJual(hargaJual);
});

When('User clicks the vertical ellipsis icon of Kategori', async () => {
    await AddProductPage.clickKategoriIcon();
});

When('User selects Kategori {string}', async (kategori) => {
    await AddProductPage.selectKategori(kategori);
});

When('User clicks the "Submit" button', async () => {
    await AddProductPage.clickSubmitButton();
});

Then('User should see an error message {string}', async (message) => {
    const errorMessage = await AddProductPage.getErrorMessage();
    expect(errorMessage).toContain(message);
});