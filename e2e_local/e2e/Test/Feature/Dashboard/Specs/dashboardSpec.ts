import { browser, by, element } from "protractor";
import { dashboardPage } from "../PO/dashboardPO";
import { LoginPage } from "../../../Feature/Login/PO/loginPO";
import * as prop from "../../../../TestData/prop.json";

describe("login test", function () {
    let dashBPage = new dashboardPage();
    let loginPage = new LoginPage();
    let originalTimeout: any;
    let waitTimeForPromise: number = 5000;

    beforeAll(function () {
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
    it("Login as user", async function () {
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

    });
    it("Checking standard dashboard tab name", async function () {
        let dashboardName = await dashBPage.getDashBoardName(waitTimeForPromise);
        expect(dashboardName).toContain("Administrator Dashboard");
    });
    it("Checking standard dashboard title", async function () {
        let dashboardTitle = await dashBPage.getDashBoardTitle(waitTimeForPromise);
        expect(dashboardTitle).toContain("Administrator Dashboard");
    });
    it("Checking all standard widget exists", async function () {
        element.all(by.className('widgetHeader')).then(function (items) {
            expect(items.length).toBe(9);
            expect(items[0].getText()).toMatch('SCHEDULE COMPLIANCE\nAll Assets & All Groups');
            expect(items[1].getText()).toMatch('OVERDUE WORK ORDERS\nAll Groups');
            expect(items[2].getText()).toMatch('HIGH PRIORITY WORK ORDERS\nAll Groups');
            expect(items[3].getText()).toMatch('LOW STOCK ITEMS');
            expect(items[4].getText()).toMatch('OPEN WORK ORDERS\nAll Assets & All Groups');
            expect(items[5].getText()).toMatch('OVERDUE PURCHASE ORDERS');
            expect(items[6].getText()).toMatch('OVERDUE RFQS');
            expect(items[7].getText()).toMatch('PURCHASE ORDERS AWAITING APPROVAL');
            expect(items[8].getText()).toMatch('WORK REQUESTS');
        });
    });
    it("Checking option for dashboard template eits", async function () {
        let buttonAddTemplate = await dashBPage.CheckPresenceOfAddDashboardTemplate(waitTimeForPromise);
        expect(buttonAddTemplate).toContain("\+")
    });
    it("checking pop up for adding dashboard shows up", async function () {
        await dashBPage.clickAddDashboardTemplate(waitTimeForPromise);
        let titleForAddDashboardTemplate = await dashBPage.getTitleFromModal(waitTimeForPromise);
        expect(titleForAddDashboardTemplate).toMatch("Add a Dashboard")
    });
    it("checking addition of blank dashboard", async function () {
        await dashBPage.addBlankDashboard(waitTimeForPromise, "Add a Dashboard");
        await dashBPage.clickRefreshButton(waitTimeForPromise, "New Dashboard");
        let BlankDashboardName = await dashBPage.getDashBoardName(waitTimeForPromise);
        expect(BlankDashboardName).toMatch("New Dashboard")
    });
    it("check for widget library to show up", async function () {
        await dashBPage.clickConfigButton(waitTimeForPromise, "New Dashboard");
        await dashBPage.click_AddAWidget_Button(waitTimeForPromise);
        let titleForAddWidget = await dashBPage.getTitleFromModal(waitTimeForPromise);
        expect(titleForAddWidget).toMatch("Add a Widget");
    });
    it("Search and add the widget", async function () {
        await dashBPage.searchAndAddWidget(waitTimeForPromise, "Add a Widget", (<any>prop).Tenant1.widgetName);
        await dashBPage.saveWidget(waitTimeForPromise, "New Dashboard");
        await dashBPage.clickRefreshButton(waitTimeForPromise, "New Dashboard");
        let widgetTile = await dashBPage.getWidgetTitle(waitTimeForPromise, "New Dashboard");
        expect(widgetTile.toLowerCase()).toMatch(((<any>prop).Tenant1.widgetName).toLowerCase());
    });
    it("Check for KPI value", async function () {
        let widgetKPIvalue = await dashBPage.getKPIValueFromWidget(waitTimeForPromise, "New Dashboard", (<any>prop).Tenant1.widgetName);
        expect(widgetKPIvalue).toMatch("0");
    });
    it("Check for filter", async function () {
        await dashBPage.clickConfigForWidget(waitTimeForPromise, "New Dashboard", (<any>prop).Tenant1.widgetName);
        await dashBPage.getfilterFromWidget_selectFilter(waitTimeForPromise);
        await dashBPage.getfilterFromWidget_selectFilterDropDown(waitTimeForPromise);
        await dashBPage.getfilterFromWidget_chooseFirstOption(waitTimeForPromise);
        await dashBPage.getfilterFromWidget_saveOption(waitTimeForPromise);
        await dashBPage.clickRefreshButton(waitTimeForPromise, "New Dashboard");
        await dashBPage.clickConfigForWidget(waitTimeForPromise, "New Dashboard", (<any>prop).Tenant1.widgetName);

        element.all(by.className('multiEntityPickerRemoveValueIcon'))
            .then(function (items2) {
                expect(items2.length).toBe(1);
            });
        await dashBPage.closeConfigWidget(waitTimeForPromise);
    });
    it("Delete Dashboard", async function () {
        await dashBPage.clickConfigButton(waitTimeForPromise, "New Dashboard");
        await dashBPage.clickDeleteDashboardButton(waitTimeForPromise);
        await dashBPage.clickProceedButtonForDeleteDashbaord(waitTimeForPromise, "DELETE DASHBOARD");
    });
    it("Logoff as user", async function () {
        let logOffButtonElem = await loginPage.clickLogOffButton();
        await logOffButtonElem.click();
        let button = await loginPage.getSignInButtonPresence();
        let buttonVisibility = await button.isDisplayed();
        expect(buttonVisibility).toBe(true);
    });
});
