import { by } from "protractor";
import { By } from "selenium-webdriver";

export class DashboardLocators {
    public getDashboardIcon(): any {
        return by.xpath('//div[@class="pk-icon-dashboard"]/span[contains(text(),"Dashboard")]');
    }
    public getActiveDashboard(): By {
        return by.xpath('//div[@class="dashboardTabStrip"]/div[@class="active dashboardTab"]');
    }
    public getActiveDashboardTitle() {
        return by.xpath('//div[@class="formLabelLarge dashboardTitle"]/h1');
    }
    public getDashboardTemplateButton() {
        return by.className('dashboardFunctionTabButton');
    }
    public getBlankDashboardButton() {
        return by.className('saveButtonAct');
    }
    public getWidgetName(widgetName: string) {
        return by.xpath('//div[@class="templateDivContainer"]//h5[contains(text(),"' + widgetName + '")]')
    }
    public getAddButtonforWidget(widgetName: string) {
        return by.xpath('//div[@class="templateDivContainer"]//h5[contains(text(),"' + widgetName + '")]//ancestor::div[@class="templateDiv"]//span[@class="actionButton secondaryButton"]')
    }
    public getSaveButton() {
        return by.className('saveButtonAct action')
    }
    public getDisabledSaveButton() {
        return by.className('saveButtonActDisabled action');
    }
    public getModalWindow() {
        return by.className('maDialogWindow')
    }
    public getConfigButton() {
        return by.xpath('//div[@class="dashboardContextButtonsBar"]//i[@class="fa fa-cog"]');
    }
    public getAddWidgetButton() {
        return by.xpath('//div[@class="dashboardContextButtonsBar"]//span[contains(text(),"Add Widget")]');
    }
    public checkPrsenceOfConfigButton_active() {
        return by.xpath('//div[@class="dashboardContextButtonsBar"]//div[@class="actionButton active action"]');
    }
    public getRefreshButton() {
        return by.className('fa fa-refresh');
    }
    public getWidgetTitle() {
        return by.xpath('//div[@class="widgetTitle"]//span[@class="title"]');
    }
    public getWidgetKPIValue() {
        return by.xpath('//div[@class="metricValue"]//div[@class="value"]');
    }
    public getDashboardModalWindow() {
        return by.xpath('//div[@class="dashboardModalWindow"]');
    }
    public getModalLabel_closeButton() {
        return by.xpath('//span[@class="closeButtonFrame"]');
    }
    public getModalLabel_getTitle() {
        return by.xpath('//div[@class="formLabelModal"]');
    }
    public getDeleteButton() {
        return by.id("contextButtonDelete");
    }
    public getDeleteButtonLabel() {
        return by.xpath('//span[@id="contextButtonDelete"]/ancestor::div[@id="actionButton action"]/span[2]');
    }
    public checkPresenceOfWidgetTitle(widgetName: string) {
        return by.xpath('//div[@class="widgetTitle"]//span[@class="title" and contains(text(),"' + widgetName + '")]');
    }
    public getConfigFilterButton_widget() {
        return by.xpath('//div[@class="configWidgetIcon"]');
    }
    public getModalWindowHeader_widgetFilter() {
        return by.xpath('//div[@class="modalHeader"]//div[@class="formLabelModal"]');
    }
    public getModalContent_widgetFilter_Title() {
        return by.xpath('//div[@class="modalContent"]//form[@class="configureWidgetForm"]/div[1]/label[@for="title"]');
    }
    public getWidgetFilterCheckbox() {
        return by.xpath('//div[@class="widgetQueryTitle"]//input[@type="checkbox"]');
    }
    public getWidgetFilterDropDown_Title() {
        return by.xpath('//form[@class="configureWidgetForm"]/div[2]/div[2]//label[contains(text(),"Choose one ")]');
    }
    public getWidgetFilterDropDown() {
        return by.xpath('//form[@class="configureWidgetForm"]/div[2]/div[2]//div[@class="actionButton entityPickerButton"]');
    }
    public getWidgetFilterDropDown_optionShows_up() {
        return by.xpath('//form[@class="configureWidgetForm"]/div[2]/div[2]//div[@class="entityPickerDropdown" and @style="display: block;"]');
    }
    public getWidgetFilterDropDown_firstOption() {
        return by.xpath('(//div[@class="entityPickerSuggestion"])[1]');
    }
    public getWidgetFilterDropDown_optionsEntered() {
        return by.className('multiEntityPickerRemoveValueIcon');
    }
    public getConfigWiget_closeButton() {
        return by.xpath('//div[@class="modalHeader"]//span[@class="closeButtonFrame"]');
    }
}
