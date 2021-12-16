const LoginPage = require('../pageobjects/Login.page');
const PublicationPage  = require('../pageobjects/Publication.page');

describe('LOGIN PAGE', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.login('vic.st.p@gmail.com', 'Test-1234');
        await expect(PublicationPage.h6).toBeExisting().true;
        await expect(PublicationPage.h6).toHaveTextContaining('publications');
    });
});


