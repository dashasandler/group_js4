const RestorePasswordPage = require('../pageobjects/RestorePassword.page');
const loginData = require('../utils/credentials_data');

describe('RESTORE PASSWORD PAGE', () => {
    it('Should send a password reset email to valid email', async () => {
        await RestorePasswordPage.restorePassword(loginData.credentialsData.email);
        await expect(RestorePasswordPage.restorePasswordMessage).toBeExisting().true;
        await expect(RestorePasswordPage.restorePasswordMessage)
            .toHaveTextContaining(`Password reset email sent to ${loginData.credentialsData.email}, if such user exists`);
    });
});
