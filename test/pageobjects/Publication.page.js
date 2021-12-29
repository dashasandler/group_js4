const Page = require('./Page');

class PublicationPage extends Page {
    get headerPublicationTitle() {
        return $("//h6[@text()='publications']")
    }

    get hamburgerMenuButton() {
        return $("#nav-bar-toggle")
    }

    get buttonPublications() {
        return $("#publication");
    }

    get buttonCompanies() {
        return $("#companies");
    }

    get buttonPeople() {
        return $("#people");
    }

    get buttonProblems() {
        return $('#problems');
    }

    get buttonProfile() {
        return $("#profile");
    }

    get buttonLogout() {
        return $("#logout");
    }

    open() {
        return super.open('publication');
    }
}

module.exports = new PublicationPage();