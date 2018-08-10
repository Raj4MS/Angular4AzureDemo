import { Angular4AzureDemoPage } from './app.po';

describe('angular4-azure-demo App', () => {
  let page: Angular4AzureDemoPage;

  beforeEach(() => {
    page = new Angular4AzureDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
