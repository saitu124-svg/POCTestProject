import { test, expect } from '@playwright/test';

test('New to playwright', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');

    // Expect a title "to contain" a substring.
    const titlePage = await page.title();
    console.log(titlePage);
    await expect(page).toHaveTitle('Test Login | Practice Test Automation');
}); 



test('test case 1: login with valid credentials', async ({ page }) => {
    await URLOpen2({ page });

    const userName = page.getByLabel('Username');
    await userName.fill('student');
    const password = page.getByLabel('Password');
    await password.fill('Password123');

    const submitButton = page.locator('#submit');
    await submitButton.click();
    await expect(page.getByText('Logged In Successfully')).toBeVisible();



})


