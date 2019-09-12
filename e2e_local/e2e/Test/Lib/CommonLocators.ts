import { by} from "protractor";


export class CommonLocators {

    public getTextSignInLogin(): any {
        return by.xpath('//*[@id="cmmsLoginForm"]//div[contains(text(),"Sign in to your account")]');
    }
    
    public getLoginButton2(): any {
        return by.className("loginButton");
    }
    
    public getLogOFFButton2() {
        return by.id("logoffBtnBottom");
    }
    public getForgotPasswordLinkLogin(): any {
        return by.partialLinkText('Forgot your password?');

    }
    public getUserNameLogin() {
        return by.name('j_username');
    }
    public getPasswordLogin() {
        return by.id('j_password');
    }

    public wait(milliseconds : number){
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), milliseconds)
        });
    }
}