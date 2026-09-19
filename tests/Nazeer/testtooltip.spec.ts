import { Page, test, expect } from '@playwright/test';

test('test case 3: verify and print tooltip text', async ({ page }) => {

    await page.goto('https://health.google.com/covid-19/open-data/explorer/statistics');

    // Expect a title "to contain" a substring.
    const titlePage = await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle('COVID-19 Open Data — Google Health');
   // await page.locator('//*[@id="_ABSTRACT_RENDERER_ID_109"]"]').hover();
//get the tooltip text
//     const control = page.locator('_ABSTRACT_RENDERER_ID_109');

// await control.hover();

// const tooltipText = await page.locator('//*[@class="google-visualization-tooltip"]').innerText();

// console.log(tooltipText);





// }
const elements =page.locator(
  "(//*[contains(@clip-path, 'health.google.com/covid-19/open-data/explorer')])[4]//*[@fill='#d2e3fc']");
const tooltip = page.locator('//*[@class="google-visualization-tooltip"]');

const count = await elements.count();
 console.log(`Found ${count} elements with the specified clip-path.`);
for (let i = 0; i < count; i++) {
    const element = elements.nth(i);

    await element.hover();

    await expect(tooltip).toBeVisible({ timeout: 3000 });

    const tooltipText = await tooltip.innerText();

    console.log(`Element ${i + 1}: ${tooltipText}`);

    // Optional: move mouse away before hovering the next element
    await page.mouse.move(0, 0);
}
});
