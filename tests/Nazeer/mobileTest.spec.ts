import { chromium, devices } from '@playwright/test';
import { test, expect } from '@playwright/test';

console.log('Program started');

(async () => {
  console.log('Launching browser...');

  const browser = await chromium.launch({
    headless: false
  });

  console.log('Browser launched');

  const context = await browser.newContext({
    ...devices['Pixel 5']
  });

  const page = await context.newPage();

  console.log('Opening Google...');

  await page.goto('https://www.google.com');

  console.log('Google opened');

  await page.waitForTimeout(5000);

  await browser.close();

  console.log('Program finished');
})();