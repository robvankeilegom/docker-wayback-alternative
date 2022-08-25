const puppeteer = require('puppeteer');
const fs = require('fs');

const sites = {

};

const d=new Date();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Set viewport width and height
  await page.setViewport({ width: 1920, height: 1080 });

  let accounts = Object.keys(sites);

  for (let i = 0; i < accounts.length; i++) {
    const account = accounts[i];

    // Make sure directory exists
    const parts = [
      'screenshots',
      d.getFullYear(),
      d.getMonth(),
      d.getDay(),
      account,
    ];
    const path = parts.join('/');

    await fs.promises.mkdir(path, { recursive: true });

    let pages = Object.keys(sites[account]);

   for (let j = 0; j < pages.length; j++) {
      const pagename = pages[j];
      const website_url = sites[account][pagename];

      // Open URL in current page
      await page.goto(website_url, { waitUntil: 'networkidle0' });

      await page.screenshot({
        path: path + `/screenshot_${pagename}.jpg`,
        fullPage: true
      });

    };
  };

  await browser.close();
})();
