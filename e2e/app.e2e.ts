import { HttpFirebasePage } from './app.po';

describe('http-firebase App', function() {
  let page: HttpFirebasePage;

  beforeEach(() => {
    page = new HttpFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('http-firebase works!');
  });
});
