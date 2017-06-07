import { ConsoboxPage } from './app.po';

describe('consobox App', () => {
  let page: ConsoboxPage;

  beforeEach(() => {
    page = new ConsoboxPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
