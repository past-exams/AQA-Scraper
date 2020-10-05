import DEBUG from 'debug';
import env from 'env-var';
import puppeteer from 'puppeteer';

const debug = DEBUG('PE-aqa-scraper:/src/index.ts');


(async () => {
    const browser = await puppeteer.launch({
        headless: env.get('PUPPETEER_HEADLESS').asBool()
    });
    const page = await browser.newPage();
    await page.goto(env.get('AQA_BASE_URL').required().asUrlString());

    //await browser.close();
})();

debug('Starting aqa-scraper');