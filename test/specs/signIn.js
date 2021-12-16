const SignInPage = require('../pageobjects/SignIn.page');

describe('SIGNIN PAGE', () => {
    it('Should signin with valid credentials', async () => {
        await SignInPage.signup('user@test.com', 'User-1234');
        await expect(SignInPage.RegistrationMsg).toBeExisting().true;
        await expect(SignInPage.RegistrationMsg).toHaveTextContaining('Registration successful!');
    });
});