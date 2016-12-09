import { AngularInventory2Page } from './app.po';

describe('angular-inventory2 App', function() {
  let page: AngularInventory2Page;

  beforeEach(() => {
    page = new AngularInventory2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
