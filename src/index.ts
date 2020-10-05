import DEBUG from 'debug';
import env from 'env-var';
import {request} from 'gaxios';
import {load} from 'cheerio';

const debug = DEBUG('PE-aqa-scraper:/src/index.ts');

request({
    url: env.get('AQA_BASE_URL').required().asUrlString()
}).then(r => {
    const $ = load(r.data.toString());
    $('#subjects option').each((index, option) =>{
        debug(option.children[0].data + " " + option.attribs['value'])
    })
});

debug('Starting aqa-scraper');