const puppeteer = require('puppeteer-core');

let scrape = async () => {
 const browser = await puppeteer.launch({headless: false,executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
 const page = await browser.newPage();
 await page.setDefaultNavigationTimeout(0);
 await page.goto('https://prefeitura.pbh.gov.br/saude/licitacao/pregao-eletronico-151-2020');
 await page.waitForSelector('#block-gavias-vinor-page-title > div > h1 > span > font > font')
 const heading1 = await page.$eval(
    '#block-gavias-vinor-page-title > div > h1 > span > font > font',
    el => el.textContent
  )
  console.log(heading1 +'\n')
 await page.waitForSelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font')
 const publication = await page.$eval(
    '#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(1) > font > font',
    el => el.textContent
  )
  console.log('PUBLICATION DATE: ' + publication)
 await page.waitForSelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font')
 const bidding = await page.$eval(
    '#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > span:nth-child(19) > font > font',
    el => el.textContent
  )
  console.log('BIDDING DATE: '+ bidding)
 await page.waitForSelector('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font')
 const object = await page.$eval(
    '#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-nothing > span > p:nth-child(6) > font > font',
    el => el.textContent
  )
  console.log('OBJECT: ' + object)
const URLs = await page.$eval('#block-views-block-view-noticia-pbh-block-5 > div > div > div > div > div > div.views-field.views-field-field-historico-da-licitacao > div > table > tbody > tr > td:nth-child(2) > div > div > div > a', anchor => anchor.getAttribute('href'));
console.log('Links: ' + URLs);
await browser.close();
};
scrape().then((value) => {
 // Success!
});
