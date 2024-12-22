class SalesPage {
    // Element selectors
    get menuPenjualan() { return $('//div[@class="css-1xmlai3"]'); }
    get tambahButton() { return $('//a[@class="chakra-button css-1piskbq"]'); }
    get searchIcon() { return $('//div[@class="chakra-input__right-addon css-7nrq"]'); }
    get productSelector() { return $('//tbody//tr[@class="css-13n66qk"]//td[@class="css-u3dlpe"]'); }
    get jumlahField() { return $('//input[@class="chakra-input css-ksd4gw"]'); }
    get jumlahBayarField() { return $('//input[@class="chakra-input css-ksd4gw"]'); }
    get bayarButton() { return $('//button[@class="chakra-button css-8ho89j"]'); }
    get successPopup() { return $('//div[contains(text(), "Transaksi Sukses")]'); }
    get productRow() { return $('//tbody//tr[@class="css-13n66qk"]'); }

    // Action methods
    async clickMenuPenjualan() {
        await this.menuPenjualan.waitForDisplayed({ timeout: 5000 });
        await this.menuPenjualan.click();
    }

    async clickTambahButton() {
        await this.tambahButton.waitForDisplayed({ timeout: 5000 });
        await this.tambahButton.click();
    }

    async clickSearchIcon() {
        await this.searchIcon.waitForDisplayed({ timeout: 5000 });
        await this.searchIcon.click();
    }

    async selectProduct(productName) {
        await this.productSelector.waitForDisplayed({ timeout: 5000 });
        await this.productSelector.click();
    }

    async inputJumlah(jumlah) {
        await this.jumlahField.waitForDisplayed({ timeout: 5000 });
        await this.jumlahField.setValue(jumlah);
    }

    async inputJumlahBayar(jumlahBayar) {
        await this.jumlahBayarField.waitForDisplayed({ timeout: 5000 });
        await this.jumlahBayarField.setValue(jumlahBayar);
    }

    async clickBayarButton() {
        await this.bayarButton.waitForDisplayed({ timeout: 5000 });
        await this.bayarButton.click();
    }

    async waitForSuccessPopup() {
        await this.successPopup.waitForDisplayed({ timeout: 5000 });
    }

    async getProductRowData() {
        return await this.productRow.getText();
    }
}

module.exports = new SalesPage();
