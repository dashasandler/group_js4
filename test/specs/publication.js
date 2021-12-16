const LoginPage = require('../pageobjects/Login.page');
const PublicationPage  = require('../pageobjects/Publication.page');
const loginData = require('../utils/credentials_data');

describe('PUBLICATION PAGE', () => {

    before('Login user', () => {
        LoginPage.login(loginData.credentialsData.email, loginData.credentialsData.password);;
    })

    it('should h6 be exist and has text "publications', async () => {
        await expect(PublicationPage.headerPublicationTitle).toBeExisting();
        //await.browser.pause(5000);
        await expect(PublicationPage.headerPublicationTitle).toHaveTextContaining('publications');
    });
});