import { AppPage } from './app.po';

describe('xqa-query-ui App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have some tabs', () => {
    page.navigateTo();
    expect(page.getTabView());
  });
});
