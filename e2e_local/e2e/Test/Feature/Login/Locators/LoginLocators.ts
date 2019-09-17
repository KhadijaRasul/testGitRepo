import { by } from "protractor";

export class LoginLocators {
    public getDashboardIcon():any {
        return by.xpath('//div[@class="pk-icon-dashboard"]/span[contains(text(),"Dashboard")]');
    }
    public getLogInButton() {
        return by.className('loginButton');
    }
    public getLogOffButton() {
        return by.id('logoffBtnBottom');
    }
}
