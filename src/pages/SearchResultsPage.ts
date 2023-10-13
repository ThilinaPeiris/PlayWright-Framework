import { Locator, Page } from "@playwright/test";
import { TestBase } from "../util/TestBase";

export class GoogleSearchResultsPage extends TestBase{

    private settingsBtn : Locator;

    constructor(page: Page){
        super(page);
        this.settingsBtn = page.locator('button[aria-label="Settings"]');
    }

    async verifyLandedOnSearchResultPage(){
        return await this.settingsBtn.isVisible();
    }

    async clickOnSettingsBtn(){
        await this.settingsBtn.click();
    }

}