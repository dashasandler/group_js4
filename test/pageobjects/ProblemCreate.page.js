const Page = require('./Page');

class ProblemCreatePage extends Page {

    get inputFieldTitle() {
        return $("#title");
    }

    get inputFieldCompany() {
        return $("#company");
    }

    get inputFieldPosition() {
        return $("#position");
    }

    get inputFieldContent(){
        return $("//textarea[@class='w-md-editor-text-input ']");
    }

    get saveBtn() {
        return $("//button[@type='submit']");
    }

    get cancelBtn() {
        return $("//button[text()='Cancel']");
    }

    async createProblem(title, company, position, content) {
        await this.inputFieldTitle.setValue(title);
        await this.inputFieldCompany.setValue(company);
        await this.inputFieldPosition.setValue(position);
        await this.inputFieldContent.setValue(content);
        await this.saveBtn.click();
    }

    async cancelProblem(title, company, position, content) {
        await this.inputFieldTitle.setValue(title);
        await this.inputFieldCompany.setValue(company);
        await this.inputFieldPosition.setValue(position);
        await this.inputFieldContent.setValue(content);
        await this.cancelBtn();
    }

    open() {
        return super.open('./problems/create');
    }
}

module.exports = new ProblemCreatePage();