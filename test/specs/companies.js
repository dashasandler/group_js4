const loginPage = require("../pageobjects/Login.page");
const loginData = require("../utils/credentials_data");
const publicationPage = require("../pageobjects/Publication.page");
const companiesPage = require("../pageobjects/Companies.page");

describe("Companies Page", ()=> {
    
    before(() => {
      browser.maximizeWindow();
      loginPage.login(loginData.credentialsData.email,loginData.credentialsData.password);
    })

    it('verify it is a Companies page', async () => {
        await publicationPage.hamburgerMenuButton.click();
        await publicationPage.buttonCompanies.click();

        await expect(companiesPage.pageTitle).toHaveTextContaining("companies");
    });

    it('verify that first title company is clickable', async () => {
        await expect(await (companiesPage.firstCompanyName.isClickable()));
    });
})