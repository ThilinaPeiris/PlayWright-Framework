import {test, expect} from '@playwright/test'
import { PageManager } from '../src/util/PageManager';

let queryText = "Playwright is Cool!!";

test.beforeEach(async({page}) => {
    await page.goto('https://www.google.com/');
})

test('Navigate to the Google Home Page', async({page})=>{
    const pm = new PageManager(page);
    await pm.homePageObj().verifyLandedOnGoogleHomePage();
})

test('Search with Google', async({page})=>{
    const pm = new PageManager(page);
    await pm.homePageObj().enterQueryTogoogleSearchBoxAndEnter(queryText);
    await pm.searchResultsPageObj().verifyLandedOnSearchResultPage();
})