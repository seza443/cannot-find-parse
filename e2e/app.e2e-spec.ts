import { CannotFindParsePage } from './app.po';

describe('cannot-find-parse App', () => {
  let page: CannotFindParsePage;

  beforeEach(() => {
    page = new CannotFindParsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
