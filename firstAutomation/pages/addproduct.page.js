class AddProductPage
{
  constructor(page) {
    this.page = page; // Ensure you store the page instance
    this.currentRow = 12;
}

    async addproduct(name,price,date) {
        await this.page.getByTestId("navbar-addproduct").click();
        await this.page.getByPlaceholder('Enter a product name').fill(name); 
        await this.page.getByPlaceholder('Enter a price').fill(price);   
        await this.page.getByTestId("date-stocked").fill(date);  
        await this.page.getByText("Submit").click();  
        await this.page.waitForTimeout(1000);

        const row = this.page.locator(`tr[data-testid ="product-row-${this.currentRow}"]`);
        const cell = await row.locator('td');
        const cellvalues = await cell.allTextContents();
        console.log(`Row ${this.currentRow} Cell Values:`, cellvalues);

        if(cellvalues.includes(name) && cellvalues.includes(price) && cellvalues.includes(date) )
        {
          console.log("The Add Product is Working");
        }
        this.currentRow++;
  }
}
module.exports = AddProductPage;




