import { Locator, Page, expect } from "@playwright/test";
import { TestBase } from "../util/TestBase";

export class GoogleHomePage extends TestBase {

    private googleSearchBox: Locator;
    private googleSearchBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.googleSearchBox = page.locator('textarea[name="q"]');
        this.googleSearchBtn = page.getByRole('button', { name: 'Google Search' });
    }

    async enterQueryTogoogleSearchBoxAndEnter(query) {
        await this.googleSearchBox.fill(query);
        await this.googleSearchBox.press("Enter");
    }

    async verifyLandedOnGoogleHomePage() {
        await expect(this.googleSearchBtn).toBeVisible();
    }

}