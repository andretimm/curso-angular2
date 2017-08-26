import { AngularCliLibsExternasPage } from './app.po';

describe('angular-cli-libs-externas App', () => {
  let page: AngularCliLibsExternasPage;

  beforeEach(() => {
    page = new AngularCliLibsExternasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
