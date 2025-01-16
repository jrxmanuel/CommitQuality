const { chromium, firefox, webkit } = require('playwright');
const ProductPage = require('./pages/product.page.js');
const PracticePage = require('./pages/practice.page.js');
const AddProductPage = require ('./pages/addproduct.page.js');
(async () => {
    const browsers = [chromium, firefox, webkit];
      for (const browserType of browsers) {
        console.log(`Running tests in: ${browserType.name()}`);
        // Launch the browser (Chromium, Firefox, or WebKit)
        const browser = await browserType.launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://commitquality.com');
    
    const productPage = new ProductPage(page);
    const practicePage = new PracticePage(page);
    const addProductPage = new AddProductPage(page);

    await addProductPage.addproduct("apple","2","2024-10-15");
    await addProductPage.addproduct("banana","4","2024-10-15");
    await productPage.searchThenFilter("");
    await practicePage.generalComponents();
    await practicePage.accordions();
    await practicePage.popups();
    await practicePage.iframe();
    await practicePage.APIs();
    await practicePage.dynamicbutton();
    await practicePage.fileupload();
    await practicePage.datalayer();
    await page.context().close();


    await context.close();
    await browser.close();
      }
})();
