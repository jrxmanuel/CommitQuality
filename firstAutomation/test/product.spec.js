const { test, expect } = require('@playwright/test');
const ProductPage = require('../pages/product.page'); 
test.describe('Product Page Tests', () => {
    let page;
    let productPage;
    test.beforeAll(async ({ browser }) => {
        // Launch the browser and create a new page before all tests
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://commitquality.com'); // Adjust the URL as necessary
        productPage = new ProductPage(page); // Initialize ProductPage with the page instance
    });

    test('Search and filter products', async () => {
        await productPage.searchThenFilter("");
    });
    
    test.afterAll(async () => {
        await page.context().close();
    });
});
