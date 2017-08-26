import { DiretivasPage } from './app.po';

describe('diretivas App', () => {
  let page: DiretivasPage;

  beforeEach(() => {
    page = new DiretivasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
