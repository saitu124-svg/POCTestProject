import { test, expect } from '@playwright/test';


async function amazonURLOpen({ page }) {
    await page.goto('https://www.Amazon.com');

    // Expect a title "to contain" a substring.
    const titlePage = await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
}

test('test case 1: login with valid credentials', async ({ page }) => {
    await amazonURLOpen({ page });

const links = await page.locator('a[href]').evaluateAll;


console.log(links);


})


