class ProductPage {
    constructor(page) {
        this.page = page; // Store the page instance
        this.HasValue = true;
        this.currentNth = 0;       
    }
    async searchThenFilter(name) {   
        await this.page.getByTestId("navbar-products").click(); // Correct usage
        await this.page.getByTestId("show-more-button").click();
        await this.page.getByPlaceholder('Filter by product name').fill(name);  
        await this.page.getByText("Filter").click();
        await this.page.waitForTimeout(1000);
       

        console.log("  ID,    NAME,      PRICE,  DATE STOCKED");
        while(this.HasValue)
        {
            const tbody = await this.page.locator('tbody');
            const row = await tbody.locator('tr').nth(this.currentNth);
            const cell = await row.locator('td');
            const cellval = await cell.allTextContents();
            if (cellval.length > 0) { 
                console.log(cellval);
            this.currentNth++;
            } else {
                this.HasValue = false;
            }        
        }
    }
  
}

module.exports = ProductPage;
