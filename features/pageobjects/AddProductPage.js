class AddProductPage {
    // Selectors
    get menuProduk() {
        return $('#produk');  // Update the selector if needed
    }

    get tambahButton() {
        return $('button#tambah');  // Update the selector if needed
    }

    get inputKodeField() {
        return $('#kode');  // Update the selector if needed
    }

    get inputNamaField() {
        return $('#nama');  // Update the selector if needed
    }

    get inputDeskripsiField() {
        return $('#deskripsi');  // Update the selector if needed
    }

    get inputHargaBeliField() {
        return $('#harga beli');  // Update the selector if needed
    }

    get inputHargaJualField() {
        return $('#harga jual');  // Update the selector if needed
    }

    get inputStokField() {
        return $('#stok');  // Update the selector if needed
    }

    get kategoriIcon() {
        return $('.kategori-icon');  // Update the selector if needed
    }

    get kategoriDropdown() {
        return $('.kategori-dropdown');  // Update the selector if needed
    }

    get submitButton() {
        return $('#submit');  // Update the selector if needed
    }

    get successToastMessage() {
        return $('div.chakra-toast');  // Update the selector if needed
    }

    get errorMessage() {
        return $('.error-message');  // Update the selector if needed
    }

    // Methods for interacting with the page
    async clickMenuProduk() {
        await this.menuProduk.click();
    }

    async clickTambahButton() {
        await this.tambahButton.click();
    }

    async inputKode(kode) {
        await this.inputKodeField.setValue(kode);
    }

    async inputNama(nama) {
        await this.inputNamaField.setValue(nama);
    }

    async inputDeskripsi(deskripsi) {
        await this.inputDeskripsiField.setValue(deskripsi);
    }

    async inputHargaBeli(hargaBeli) {
        await this.inputHargaBeliField.setValue(hargaBeli);
    }

    async inputHargaJual(hargaJual) {
        await this.inputHargaJualField.setValue(hargaJual);
    }

    async inputStok(stok) {
        await this.inputStokField.setValue(stok);
    }

    async clickKategoriIcon() {
        await this.kategoriIcon.click();
    }

    async selectKategori(kategori) {
        await this.kategoriDropdown.selectByVisibleText(kategori);
    }

    async clickSubmitButton() {
        await this.submitButton.click();
    }

    async getErrorMessage() {
        // You might need to change the selector based on the actual error message element
        return await this.errorMessage.getText();
    }
}

module.exports = new AddProductPage();