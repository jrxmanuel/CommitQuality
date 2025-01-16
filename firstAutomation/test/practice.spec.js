const { test, expect } = require('@playwright/test');
const PracticePage = require('../pages/practice.page'); 

test.describe('Practice Page Tests', () => {
    let page;
    let practicePage;

    test.beforeAll(async ({ browser }) => {
        // Launch the browser and create a new page before all tests
        const context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://commitquality.com'); // Adjust the URL as necessary
        practicePage = new PracticePage(page); // Initialize ProductPage with the page instance
    });

    // Utility function for logging test execution
    const logTestStart = (testName) => console.log(`Starting test: ${testName}`);
    const logTestEnd = (testName) => console.log(`Finished test: ${testName}`);

    test('General Components', async () => { 
        logTestStart('General Components');
        await practicePage.generalComponents();
        logTestEnd('General Components');
    });

    test('Accordions', async () => {
        logTestStart('Accordions');
        await practicePage.accordions();
        logTestEnd('Accordions');
    });

    test("Popups", async () => {
        logTestStart('Popups');
        await practicePage.popups();
        logTestEnd('Popups');
    });

    test("Iframe", async () => {
        logTestStart('Iframe');
        await practicePage.iframe();
        logTestEnd('Iframe');
    });

    test("APIs", async () => {
        logTestStart('APIs');
        await practicePage.APIs();
        logTestEnd('APIs');
    });

    test("Dynamic Buttons", async () => {
        logTestStart('Dynamic Buttons');
        await practicePage.dynamicbutton();
        logTestEnd('Dynamic Buttons');
    });

    test("File Upload", async () => {
        logTestStart('File Upload');
        await practicePage.fileupload();
        logTestEnd('File Upload');
    });

    test("Data Layer", async () => {
        logTestStart('Data Layer');
        await practicePage.datalayer();
        logTestEnd('Data Layer');
    });

    test("Download File", async () => {
        logTestStart('Download File');
        await practicePage.downloadfile();
        logTestEnd('Download File');
    });

    test.afterAll(async () => {
        await page.context().close();
    });
});
