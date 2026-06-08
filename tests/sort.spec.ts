import { test, expect } from '@playwright/test';

test('sort products by price low to high', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: /login/i }).click();

  await page.locator('.product_sort_container')
    .selectOption('lohi');

  const firstPrice = await page
    .locator('.inventory_item_price')
    .first()
    .textContent();

  expect(firstPrice).toBe('$7.99');
});