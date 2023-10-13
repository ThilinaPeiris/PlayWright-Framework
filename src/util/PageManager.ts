import {Page, expect} from '@playwright/test'
import { GoogleHomePage } from '../pages/HomePage';
import { GoogleSearchResultsPage } from '../pages/SearchResultsPage';

export class PageManager{

    private readonly page: Page;
    private readonly homePage: GoogleHomePage;
    private readonly searchResultsPage: GoogleSearchResultsPage;
    
    constructor(page: Page){
        this.page = page;
        this.homePage = new GoogleHomePage(this.page);
        this.searchResultsPage = new GoogleSearchResultsPage(this.page);
    }

    homePageObj(){
        return this.homePage;
    }    
    
    searchResultsPageObj(){
        return this.searchResultsPage;
    }

}