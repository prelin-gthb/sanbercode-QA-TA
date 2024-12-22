class DashboardPage {
    // Method to verify if the current URL is the dashboard page URL
    async verifyOnDashboard() {
        const currentUrl = await browser.getUrl();  // Get the current URL
        expect(currentUrl).toContain('/dashboard');  // Verify the URL contains '/dashboard'
    }
}

module.exports = new DashboardPage();
