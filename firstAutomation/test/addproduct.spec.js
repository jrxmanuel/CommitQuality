const { test, expect } = require('@playwright/test');
const AddProductPage = require('../pages/addproduct.page'); 
test.describe('Add Product Page Tests', () => {
    let page;
    let addproductPage;
    test.beforeAll(async ({ browser }) => {
        // Launch the browser and create a new page before all tests
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://commitquality.com'); // Adjust the URL as necessary
        addproductPage = new AddProductPage(page); // Initialize ProductPage with the page instance
    });

    test('Add Products', async () => {
        await addproductPage.addproduct("apple","2","2024-10-15");
        await addproductPage.addproduct("banana","4","2024-10-15");
        await addproductPage.addproduct("mango","7","2024-10-15");
    });

    
    test.afterAll(async () => {
        await page.context().close();
    });
});
