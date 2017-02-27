import { MessengerInterfacePage } from './app.po';

describe('messenger-interface App', function() {
  let page: MessengerInterfacePage;

  beforeEach(() => {
    page = new MessengerInterfacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
