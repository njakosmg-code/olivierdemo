import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
    test.setTimeout(200_000);
    await page.goto('https://www.saucedemo.com/');

  
//verifier le compte incorrect 
await page.locator('//*[@id="user-name"]').fill('test');
await page.locator('//*[@id="password"]').fill('qa');
await page.locator('//*[@id="login-button"]').click();

//correct
await page.locator('//*[@id="user-name"]').fill('standard_user');
await page.locator('//*[@id="password"]').fill('secret_sauce');

await page.locator('//*[@id="login-button"]').click();



});