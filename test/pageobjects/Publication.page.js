const Page = require('./page');

class PublicationPage extends Page {
    get h6() {
        return $("//h6[text()='publications']")
    }

    open() {
        return super.open('publication');
    }
}

module.exports = new PublicationPage();