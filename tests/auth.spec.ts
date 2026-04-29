import { test, expect } from '@playwright/test';

const demoAccounts = {
    patient: {
      email: "mila@gmail.com",
      password: "123"
    },
    doctor: {
      email: "anna@gmail.com",
      password: "1234"
    }
  }

async function loginAsPatient(page: any) {
  await page.goto('http://localhost:5173/login');
  await page.getByPlaceholder('Enter Your Email').fill(demoAccounts.patient.email);
  await page.getByPlaceholder('Password').fill(demoAccounts.patient.password);
  await page.getByRole('button', { name: 'Log in' }).last().click();
}

test('patient can log in successfully', async ({ page }) => {
  await loginAsPatient(page);
  await expect(page.getByText('User successfully logged in!')).toBeVisible();
});


test('logged in users can view a doctor profile', async ({ page }) => {
    await loginAsPatient(page);

    // Click the "Find a Doctor" link
    await page.getByRole('banner').getByRole('link', { name: 'Find a Doctor' }).click();
    await expect(page.getByText('At Thriveful, we believe everyone deserves access to quality mental health care.')).toBeVisible();

    // Click the arrow button on the first doctor card. The link goes to /doctors-details/
    await page.locator('a[href*="/doctors-details"]').first().click();

    // Verify doctor profile page loaded
    // The page loads data from the API before showing "Book Appointment". Add a wait for the button to appear. The timeout: 10000 gives it 10 seconds to load.
    await expect(page.getByText('Book Appointment')).toBeVisible({ timeout: 10000 });
});