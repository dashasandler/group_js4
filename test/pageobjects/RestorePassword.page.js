const Page = require('./Page');

class RestorePasswordPage extends Page {

    get inputEmail() {
        return $('#email');
    }

    get buttonSubmit() {
        return $('//button[@type="submit"]');
    }

    get restorePasswordMessage () {
        return $('//div[contains(@class,\"MuiAlert-message\")]');
    }

    async restorePassword (email, password) {
        await this.open();
        await this.inputEmail.setValue(email);
        await this.buttonSubmit.click();
    }

    open() {
        return super.open('/passwordReset');
    }
}

module.exports = new RestorePasswordPage();