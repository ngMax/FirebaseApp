export class HttpFirebasePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('http-firebase-app h1')).getText();
  }
}
