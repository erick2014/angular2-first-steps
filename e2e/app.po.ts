export class Angular2FirstStepsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-first-steps-app h1')).getText();
  }
}
