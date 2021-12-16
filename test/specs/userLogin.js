const LoginPage = require('../pageobjects/Login.page');
const PublicationPage = require('../pageobjects/Publication.page');
const loginData = require('../utils/credentials_data');

describe('LOGIN PAGE', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login(loginData.credentialsData.email, loginData.credentialsData.password);
        await expect(PublicationPage.headerPublicationTitle).toBeExisting().true;
        await expect(PublicationPage.headerPublicationTitle).toHaveTextContaining('publications');
    });
});


