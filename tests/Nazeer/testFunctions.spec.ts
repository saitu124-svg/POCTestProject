import { Page, expect } from '@playwright/test';


async function URLOpen({ page }) {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Expect a title "to contain" a substring.
    const titlePage = await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
}