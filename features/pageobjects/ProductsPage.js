class ProductsPage {
    // Method to verify if the current URL is the products page URL
    async verifyOnProducts() {
        const currentUrl = await browser.getUrl();  // Get the current URL
        expect(currentUrl).toContain('/products');  // Verify the URL contains '/products'
    }
}

module.exports = new ProductsPage();
