const { test, expect} = require('@playwright/test');
const path = require('path');

class PracticePage
{   
    constructor(page)
    {
      this.page = page;
    }
    
    async generalComponents()
    {    
        await this.page.getByTestId("navbar-practice").click();
        await this.page.getByTestId("practice-general").click();  
        await this.page.getByTestId("basic-click").click();  
        await this.page.getByTestId("double-click").dblclick();  
        await this.page.getByTestId("right-click").click({button: 'right'}); 
        
      
        await this.page.getByTestId("option1").click(); 
        await this.page.getByTestId("option2").click();  
      
        for (let i = 1; i <= 3; i++)
        {
          await this.page.selectOption('[data-testid="dropdown"] select', `option${i}`);  
        }
       
        for (let i = 1; i <= 3; i++)
        {
          await this.page.getByTestId(`checkbox${i}`).check();  
          
        } 
    }


    async accordions()
    {
        await this.page.getByTestId("navbar-practice").click();
        await this.page.getByTestId("practice-accordions").click(); 

        for (let i = 0; i <= 2; i++)
        {
          await this.page.getByTestId("accordion-1").nth(i).click();  await this.page.waitForTimeout(1000);
          if(i == 0)
          {
            await this.page.getByTestId("basic-click").click();  await this.page.waitForTimeout(1000);
            await this.page.getByTestId("double-click").dblclick(); await this.page.waitForTimeout(1000);
            await this.page.getByTestId("right-click").click({button: 'right'});  await this.page.waitForTimeout(1000);
          }
          else if(i == 1)
          {
            await this.page.getByTestId("option1").click();   await this.page.waitForTimeout(1000);
            await this.page.getByTestId("option2").click();   await this.page.waitForTimeout(1000);
          }
          else if (i == 2)
          {
            for(let i = 1; i <= 3;i++)
            {
              await this.page.getByTestId(`checkbox${i}`).click();   await this.page.waitForTimeout(1000);
            }
          }
        }
    }


    async popups()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-random-overlay").click();
   
      const overlay = await this.page.waitForSelector('.overlay-content'); // Selector for the overlay
      const isVisible = await overlay.isVisible();
      if (isVisible) {
          console.log("Overlay is visible.");
          await this.page.getByText('Close').click(); 
      }
      for (let i = 1; i <= 3; i++)
        {
          await this.page.getByTestId(`accordion-${i}`).click();  await this.page.waitForTimeout(1000);
          if(i == 1)
          {
            await this.page.getByTestId("basic-click").click();  await this.page.waitForTimeout(1000);
            await this.page.getByTestId("double-click").dblclick(); await this.page.waitForTimeout(1000);
            await this.page.getByTestId("right-click").click({button: 'right'});  await this.page.waitForTimeout(1000);
          }
          else if(i == 2)
          {
            await this.page.getByTestId("option1").click();   await this.page.waitForTimeout(1000);
            await this.page.getByTestId("option2").click();   await this.page.waitForTimeout(1000);
          }
          else if (i == 3)
          {
            for(let i = 1; i <= 3;i++)
            {
              await this.page.getByTestId(`checkbox${i}`).click();   await this.page.waitForTimeout(1000);
            }
          }
        }

    }

    async iframe()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-iframe").click();
      const frame = await this.page.getByTestId("iframe").contentFrame()
      await frame.getByTestId("navbar-practice").click();
    }

    async APIs()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-api").click();
      await this.page.getByTestId("get-button").click();

      const response = await this.page.request.get('https://jsonplaceholder.typicode.com/todos/1');
      expect(response.ok()).toBeTruthy();
    
      const responseBody = await response.json();
      expect(responseBody).toEqual({
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    });
    }

    async dynamicbutton()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-dynamic-text").click();
      await this.page.getByTestId("dynamic-button1").click();
      await this.page.waitForTimeout(6000);
      await this.page.getByTestId("dynamic-button1").click();
   
     
    }

    async fileupload()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-file-upload").click();
      
    const fileChooserPromise = this.page.waitForEvent('filechooser');
    await this.page.getByTestId('file-input').click();
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(path.join(__dirname, 'testtext.txt'));
    await this.page.getByText("Submit").click();
    console.log("SUCCESFULLY SUBMITTED");
    }

    async datalayer() {
      
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-mock-data-layer").click(); 
  
      
      const mockedDataLayer = await this.page.evaluate(() => {
          return window.dataLayer; // Access the global dataLayer variable
      });
  
      console.log("Mocked Data Layer:", mockedDataLayer);
  }

    async downloadfile()
    {
      await this.page.getByTestId("navbar-practice").click();
      await this.page.getByTestId("practice-file-download").click(); 
      await this.page.getByText("Download File").click();
      console.log("Downloaded");
    }


}
module.exports = PracticePage;

