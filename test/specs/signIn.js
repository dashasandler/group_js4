const SignInPage = require('../pageobjects/SignIn.page');

describe('SIGNIN PAGE', () => {
    it('Should signin with valid credentials', async () => {
        await SignInPage.signup(generateUserEmail(5,"12345"), 'User-1234');
        await expect(SignInPage.RegistrationMsg).toBeExisting().true;
        await expect(SignInPage.RegistrationMsg).toHaveTextContaining('Registration successful!');
    });
});
const generateUserEmail = (length, characters) => {
    let first = "test.";
    for (let i = 0; i < length; i++) {
        first += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return first + "@gmail.com";
 };
