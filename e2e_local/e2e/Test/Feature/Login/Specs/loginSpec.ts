import { browser } from "protractor";
import { LoginPage } from "../PO/loginPO";

import * as prop from "../../../../TestData/prop.json";

describe("login test", function () {
    let loginPage = new LoginPage();
    let originalTimeout: any;
    beforeAll(function () {
        browser.waitForAngularEnabled(false);
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
        browser.driver.manage().timeouts().implicitlyWait(10000);
    });
    afterAll(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    it("Launch url check", async function () {
        await loginPage.getPage((<any>prop).Tenant1.subdomain);
        let title = await loginPage.getTitle();
        expect(title).toEqual('Fiix');
    });
    it("Sign in text check", async function () {
        await loginPage.getPage((<any>prop).Tenant1.subdomain);
        let signInElem = await loginPage.getSignInTextLogin();
        let loginText = await signInElem.getText();
        expect(loginText).toContain("Sign in to your account");
    });
    it("Forgot password link", async function () {
        await loginPage.getPage((<any>prop).Tenant1.subdomain);
        let forgotPassLinkElem = await loginPage.getForgotYourPasswordLink();
        let forgotPassLink = await forgotPassLinkElem.getText();
        expect(forgotPassLink).toContain("Forgot your password?");
    });
    it("Login as user", async function () {
        await loginPage.getPage((<any>prop).Tenant1.subdomain);
        let loginUserNameElem = await loginPage.setUserName();
        await loginUserNameElem.sendKeys((<any>prop).Tenant1.username);
        let loginUserNameElemCheckValue = await loginUserNameElem.getAttribute('value');
        expect(loginUserNameElemCheckValue).toContain((<any>prop).Tenant1.username);

        let loginPasswordElem = await loginPage.setPassword();
        await loginPasswordElem.sendKeys((<any>prop).Tenant1.password);
        let loginPasswordElemCheckValue = await loginPasswordElem.getAttribute('value');
        expect(loginPasswordElemCheckValue).toContain((<any>prop).Tenant1.password);

        let signinButtonElement = await loginPage.clickLoginButton();
        await signinButtonElement.click();

        let dashboardIconElem = await loginPage.confirmLogin();
        let dashboardIconText = await dashboardIconElem.getText();
        expect(dashboardIconText).toContain("Dashboard");
        let logOffButtonElem = await loginPage.clickLogOffButton();
        await logOffButtonElem.click();
        let button = await loginPage.getSignInButtonPresence();
        let buttonVisibility = await button.isDisplayed();
        expect(buttonVisibility).toBe(true);
    });
    it("Logoff as user", async function () {
        await loginPage.getPage((<any>prop).Tenant1.subdomain);
        let loginUserNameElem = await loginPage.setUserName();
        await loginUserNameElem.sendKeys((<any>prop).Tenant1.username);
        let loginUserNameElemCheckValue = await loginUserNameElem.getAttribute('value');
        expect(loginUserNameElemCheckValue).toContain((<any>prop).Tenant1.username);

        let loginPasswordElem = await loginPage.setPassword();
        await loginPasswordElem.sendKeys((<any>prop).Tenant1.password);
        let loginPasswordElemCheckValue = await loginPasswordElem.getAttribute('value');
        expect(loginPasswordElemCheckValue).toContain((<any>prop).Tenant1.password);

        let signinButtonElement = await loginPage.clickLoginButton();
        await signinButtonElement.click();

        await loginPage.confirmLogin();
        let logOffButtonElem = await loginPage.clickLogOffButton();
        await logOffButtonElem.click();
        let button = await loginPage.getSignInButtonPresence();
        let buttonVisibility = await button.isDisplayed();
        expect(buttonVisibility).toBe(true);
    });
});
