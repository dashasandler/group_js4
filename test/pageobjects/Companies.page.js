const Page = require('./Page');

class CompaniesPage extends Page {
    get pageTitle() {
        return $('div>h6');
    }

    get firstCompanyName() {
        return $('//*[@class="d-flex flex-wrap"]/div[1]/a/h2');
    }

    open() {
        return super.open('./companies');
    }
}

module.exports = new CompaniesPage();
