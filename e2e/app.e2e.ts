import { Angular2FirstStepsPage } from './app.po';

describe('angular2-first-steps App', function() {
  let page: Angular2FirstStepsPage;

  beforeEach(() => {
    page = new Angular2FirstStepsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-first-steps works!');
  });
});
