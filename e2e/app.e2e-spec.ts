import { TravelLankaPage } from './app.po';

describe('travel-lanka App', function() {
  let page: TravelLankaPage;

  beforeEach(() => {
    page = new TravelLankaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
