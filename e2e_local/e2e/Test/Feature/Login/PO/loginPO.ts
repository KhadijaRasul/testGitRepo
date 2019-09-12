import { browser, $, ExpectedConditions } from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { LoginLocators } from "../Locators/LoginLocators";

export class LoginPage {
    commonLocators = new CommonLocators();
    loginLocators = new LoginLocators();

    public getPage(subdomain:string) {
        return Promise.resolve(browser.driver.get(this.buildURL(subdomain)));
    }
    private buildURL(subdomain: string): string {
        return `${browser.params.protocol}://${subdomain}.${browser.params.domain}`;
    }
    public getTitle() {
        return browser.driver.getTitle();
    }
    public getSignInTextLogin() {
        var until = ExpectedConditions;
        return browser.driver.wait(until.elementToBeClickable($('.loginButton')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getTextSignInLogin()));
    }
    public getSignInButtonPresence() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('.loginButton')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getLoginButton2()));
    }
    public getForgotYourPasswordLink() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('.loginButton')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getForgotPasswordLinkLogin()));
    }
    public getUserNameField() {
        return browser.driver.findElement(this.commonLocators.getUserNameLogin());
    }
    public getPasswordField() {
        return browser.driver.findElement(this.commonLocators.getPasswordLogin());
    }
    public setUserName() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('.loginButton')))
            .then(() => browser.driver.findElement(this.commonLocators.getUserNameLogin()));
    }
    public setPassword() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('.loginButton')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getPasswordLogin()));
    }
    public clickLoginButton() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('.loginButton')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getLoginButton2()));
    }
    public clickLogOffButton() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('#logoffBtnBottom')), 5000)
            .then(() => browser.driver.findElement(this.commonLocators.getLogOFFButton2()));
    }
    public confirmLogin() {
        var until1 = ExpectedConditions;
        return browser.driver.wait(until1.elementToBeClickable($('#logoffBtnBottom')), 5000)
            .then(() => browser.driver.findElement(this.loginLocators.getDashboardIcon()));
    }
    public confirmLogOff() {
        this.getSignInButtonPresence();
    }
}
