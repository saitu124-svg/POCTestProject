import {Page, test, expect } from '@playwright/test';


async function amazonURLOpen({ page }: { page: Page })  {
    await page.goto('https://www.Amazon.com');

    // Expect a title "to contain" a substring.
    const titlePage = await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle('Amazon.com. Spend less. Smile more.');
}

test('test case 1: login with valid credentials', async ({ page }) => {
    await amazonURLOpen({ page });

const links = page.locator('a[href]').evaluateAll;


console.log(links);
console.log("hello Nazeer is checking and pushing code second time");


})


