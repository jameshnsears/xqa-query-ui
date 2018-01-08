import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTabView() {
    return element(by.model('p-tabview'));
  }
}
