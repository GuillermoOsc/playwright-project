import { test, expect } from '@playwright/test';

test('El usuario debe iniciar sesión correctamente', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.locator('[data-test="username"]').fill('standard_user');

  await page.locator('[data-test="password"]').fill('secret_sauce');

  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});