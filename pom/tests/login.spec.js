import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login-page');
import dotenv from 'dotenv'

dotenv.config()

test('El usuario debe iniciar sesión correctamente', async ({ page }) => {

  await page.goto(process.env.SAUCEDEMOURL);
  const loginPage = new LoginPage(page);
  await loginPage.enviarFormSesion(process.env.SAUCEDEMOUSER, process.env.SAUCEDEMOPASS);
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});