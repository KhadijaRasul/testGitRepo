import { browser, ExpectedConditions, element} from "protractor";
import { CommonLocators } from "../../../Lib/CommonLocators";
import { DashboardLocators } from "../Locators/DashboardLocators";
import { LoginLocators } from "../../Login/Locators/LoginLocators";

export class dashboardPage {
    commonLocators = new CommonLocators();
    loginLocators = new LoginLocators();
    dashboardLocators = new DashboardLocators();

    public checkPresenceOfDashboard(waitTime: number) {
        var until = ExpectedConditions;
        return browser.driver.wait(until.elementToBeClickable(element(this.loginLocators.getLogOffButton())), waitTime)
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.getDashboardIcon())), waitTime));
    }
    public getDashBoardName(waitTime: number) {
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getActiveDashboard()))
            .then((result) => result.getText());
    }
    public getDashBoardTitle(waitTime: number) {
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getActiveDashboardTitle()))
            .then((result) => result.getText());
    }
    public clickConfigButton(waitTime: number, textTitle: string) {
        var longerWaitTime=waitTime*4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboardTitle()), textTitle), longerWaitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getConfigButton()))
            .then((result) => result.click());
    }
    public click_AddAWidget_Button(waitTime: number) {
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.checkPrsenceOfConfigButton_active())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getAddWidgetButton()))
            .then((result) => result.click());
    }
    public getLabelDeleteDashboardButton(waitTime: number) {
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.checkPrsenceOfConfigButton_active())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getDeleteButtonLabel()))
            .then((result) => result.getText());
    }
    public clickDeleteDashboardButton(waitTime: number) {
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.checkPrsenceOfConfigButton_active())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getDeleteButton()))
            .then((result) => result.click());
    }
    public getTitleFromModal(waitTime: number) {
        return browser.driver.wait(ExpectedConditions.presenceOf(element(this.dashboardLocators.getDashboardModalWindow())), waitTime)
            .then(() => browser.driver.findElement(this.dashboardLocators.getModalLabel_getTitle()))
            .then((result3) => result3.getText());
    }
    public CheckPresenceOfAddDashboardTemplate(waitTime: number) {
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getDashboardTemplateButton()))
            .then((result) => result.getText());
    }
    public clickAddDashboardTemplate(waitTime: number) {
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getDashboardTemplateButton()))
            .then((result) => result.click());
    }
    public addBlankDashboard(waitTime: number, textFound: string) {
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalLabel_getTitle()), textFound), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getBlankDashboardButton()))
            .then((result) => result.click())
    }
    public saveWidget(waitTime: number, textFound: string) {
        var longerWaitTime=waitTime*4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboard()), textFound), longerWaitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getSaveButton()))
            .then((result3) => result3.click());
    }
    public clickProceedButtonForDeleteDashbaord(waitTime: number,textFound: string) {
        var until1 = ExpectedConditions;
        return browser.driver.wait(ExpectedConditions.visibilityOf(element(this.dashboardLocators.getModalWindow())), waitTime)
            .then(() => browser.driver.wait(until1.textToBePresentInElement(element(this.dashboardLocators.getModalLabel_getTitle()), textFound), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getSaveButton()))
            .then((result3) => result3.click());
    }
    public clickRefreshButton(waitTime: number, dashBoardName: string) {
        var longerWaitTime=waitTime*4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboardTitle()), dashBoardName), waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.getDisabledSaveButton())), longerWaitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getRefreshButton()))
            .then((result) => result.click());
    }
    public getWidgetTitle(waitTime: number, dashBoardName: string) {
        var longerWaitTime=waitTime*4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboardTitle()), dashBoardName), longerWaitTime))
            .then(() => browser.driver.wait(until.elementToBeClickable(element(this.dashboardLocators.getRefreshButton())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getWidgetTitle()))
            .then((result) => result.getText());
    }
    public getKPIValueFromWidget(waitTime: number, dashBoardName: string, widgetTitle: string) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboardTitle()), dashBoardName), longerWaitTime))
            .then(() => browser.driver.wait(until.elementToBeClickable(element(this.dashboardLocators.getRefreshButton())), waitTime))
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.checkPresenceOfWidgetTitle( widgetTitle)))))
            .then(() => browser.driver.findElement(this.dashboardLocators.getWidgetKPIValue()))
            .then((result) => result.getText());
    }
    public clickConfigForWidget(waitTime: number, dashBoardName: string, widgetTitle: string) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return this.checkPresenceOfDashboard((waitTime))
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getActiveDashboardTitle()), dashBoardName), longerWaitTime))
            .then(() => browser.driver.wait(until.elementToBeClickable(element(this.dashboardLocators.getRefreshButton())), waitTime))
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.checkPresenceOfWidgetTitle( widgetTitle)))))
            .then(() => browser.driver.findElement(this.dashboardLocators.getConfigFilterButton_widget()))
            .then((result) => result.click());
    }
     public getfilterFromWidget_selectFilter(waitTime: number) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalWindowHeader_widgetFilter()), "CONFIGURE WIDGET"), longerWaitTime)
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalContent_widgetFilter_Title()), "Title"), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getWidgetFilterCheckbox()))
            .then((result) => result.click());
    }
    public getfilterFromWidget_selectFilterDropDown(waitTime: number) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalWindowHeader_widgetFilter()), "CONFIGURE WIDGET"), longerWaitTime)
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalContent_widgetFilter_Title()), "Title"), waitTime))
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.getWidgetFilterDropDown_Title())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getWidgetFilterDropDown()))
            .then((result) => result.click());
    }
    public getfilterFromWidget_chooseFirstOption(waitTime: number) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalWindowHeader_widgetFilter()), "CONFIGURE WIDGET"), longerWaitTime)
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalContent_widgetFilter_Title()), "Title"), waitTime))
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.getWidgetFilterDropDown_Title())), waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.getWidgetFilterDropDown_optionShows_up())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getWidgetFilterDropDown_firstOption()))
            .then((result) => result.click());
    }
    public getfilterFromWidget_saveOption(waitTime: number) {
        var longerWaitTime = waitTime * 4;
        var until = ExpectedConditions;
        return browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalWindowHeader_widgetFilter()), "CONFIGURE WIDGET"), longerWaitTime)
            .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalContent_widgetFilter_Title()), "Title"), waitTime))
            .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.getWidgetFilterDropDown_Title())), waitTime))
            .then(() => browser.driver.wait(until.presenceOf(element(this.dashboardLocators.getWidgetFilterDropDown_optionsEntered())), waitTime))
            .then(() => browser.driver.findElement(this.dashboardLocators.getSaveButton()))
            .then((result) => result.click());
    }
    public closeConfigWidget(waitTime:number) {
        var until = ExpectedConditions;
        return browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalWindowHeader_widgetFilter()), "CONFIGURE WIDGET"), waitTime)
        .then(() => browser.driver.wait(until.textToBePresentInElement(element(this.dashboardLocators.getModalContent_widgetFilter_Title()), "Title"), waitTime))
        .then(() => browser.driver.wait(until.visibilityOf(element(this.dashboardLocators.getWidgetFilterDropDown_Title())), waitTime))
        .then(() => browser.driver.findElement(this.dashboardLocators.getConfigWiget_closeButton()))
        .then((result) => result.click());
    }
    public searchAndAddWidget(waitTime:number,textFound: string, widgetName: string) {
       return browser.driver.wait(ExpectedConditions.presenceOf(element(this.dashboardLocators.getDashboardModalWindow())), waitTime)
            .then(() => browser.driver.wait(ExpectedConditions.textToBePresentInElement(element(this.dashboardLocators.getModalLabel_getTitle()), textFound), waitTime))
            .then(() => {
                var scrollToScript = element(this.dashboardLocators.getWidgetName(widgetName));
                browser.executeScript('arguments[0].scrollIntoView()', scrollToScript.getWebElement())
                    .then(() => {
                        element(this.dashboardLocators.getAddButtonforWidget(widgetName)).click();
                    })}
            )

    }

}
