const Page = require('./Page');

class ProblemsPage extends Page {

    get titleProblemsPage() {
        return $("//h6[contains(text(),'problems')]")
    }

    get newProblemBtn() {
        return $("//button[text()='New Problem']");
    }

    get colunmsDropdownMenu() {
        return $("//button[contains(text(),'Columns')]");
    }

    get filtersMenu() {
        return $("//button[contains(text(),'Filters')]");
    }

    get densityDropdownMenu() {
        return $("//button[@id='mui-947123467']");
    }

    get exportDropdownMenu() {
        return $("//button[@id='mui-944211815']");
    }

    get problemName() {
        return $("//div[contains(text(),'Problem name')]");
    }

    get position() {
        return $("//div[contains(text(),'Position')]");
    }

    get company() {
        return $("//div[contains(text(),'Company')]");
    }

    get solutions() {
        return $("//div[contains(text(),'Solutions')]");
    }

    get creator() {
        return $("//div[contains(text(),'Creator')]");
    }

    open() {
        return super.open('problems');
    }
}

module.exports = new ProblemsPage();