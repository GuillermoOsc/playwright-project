import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');

test('El usuario debe iniciar sesión correctamente', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');
  const loginPage = new LoginPage(page);
  await loginPage.enviarFormSesion('standard_user', 'secret_sauce')
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});