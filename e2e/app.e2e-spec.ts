import { MyFirstAngularCliPage } from './app.po';

describe('my-first-angular-cli App', function() {
  let page: MyFirstAngularCliPage;

  beforeEach(() => {
    page = new MyFirstAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
