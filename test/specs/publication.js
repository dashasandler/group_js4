const LoginPage = require('../pageobjects/Login.page');
const PublicationPage  = require('../pageobjects/Publication.page');

describe('PUBLICATION PAGE', () => {

    before('Login user', () => {
        LoginPage.login('vic.st.p@gmail.com', 'Test-1234');
    })

    it('should h6 be exist and has text "publications', async () => {
        await expect(PublicationPage.h6).toBeExisting();
        //await.browser.pause(5000);
        await expect(PublicationPage.h6).toHaveTextContaining('publications');
    });
});