const SignUpPage = require('../pageobjects/SignUp.page');
const generateUserEmail = require('../utils/emailGenerator');

describe('SIGNUP PAGE', () => {
    it('Should sign in with valid credentials', async () => {
        await SignUpPage.signup(generateUserEmail(5,"12345"), 'User-1234');
        await expect(SignUpPage.RegistrationMsg).toBeExisting().true;
        await expect(SignUpPage.RegistrationMsg).toHaveTextContaining('Registration successful!');
    });
});
