// import { test, expect } from '@playwright/test';
// const { LoginPage } = require('../pages/login-page');
// import dotenv from 'dotenv'

// dotenv.config()

// test('El usuario debe iniciar sesión correctamente', async ({ page }) => {

//   await page.goto(process.env.SAUCEDEMOURL);
//   const loginPage = new LoginPage(page);
//   await loginPage.enviarFormSesion(process.env.SAUCEDEMOUSER, process.env.SAUCEDEMOPASS);
//   await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

// });




import { test, expect } from '@playwright/test';

test('El usuario debe iniciar sesión correctamente en OrangeHRM', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

// npx playwright test login.spec.js