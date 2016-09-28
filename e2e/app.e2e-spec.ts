import { AngularAppDemoPage } from './app.po';

describe('angular-app-demo App', function() {
  let page: AngularAppDemoPage;

  beforeEach(() => {
    page = new AngularAppDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
