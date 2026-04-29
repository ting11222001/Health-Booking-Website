# NOTES

## Add Playwright tests

Instaling:
```
Getting started with writing end-to-end tests with Playwright:
Initializing project in '.'
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (Y/n) · false
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
Initializing NPM project (npm init -y)…
```

Run the spec in the `/tests` folder:
```
npx playwright test --headed
```

When all the test cases passed, it should be:
```
Running 2 tests using 2 workers
  2 passed (4.7s)

To open last HTML report run:

  npx playwright show-report
```

### Disable multiple browsers check

On multiple browsers: Not required. Limit it to Chromium only for now. Open `playwright.config.ts` and find the `projects` array, then delete the firefox and webkit entries so only chromium remains.


## Acknowledgements

A part of the UI design was inspired by [Coding With Muhib](https://www.youtube.com/watch?v=K4_J3ShsUOY&t=22s&ab_channel=CodingWithMuhib).

## Test User Login Information
To test the credential authentication functionality, you can use the following admin and user (patients/doctors) login information:

admin:
```bash
{
    "email": "admin@gmail.com",
    "password": "admin"
}
```

users (i.e. patient):
```bash
{
    "email": "mila@gmail.com",
    "password": "123"
}

{
    "email": "emma@gmail.com",
    "password": "123"
}
```

doctors:
```bash
{
    "email": "anna@gmail.com",
    "password": "1234"
}

{
    "email": "john@gmail.com",
    "password": "1234"
}
```