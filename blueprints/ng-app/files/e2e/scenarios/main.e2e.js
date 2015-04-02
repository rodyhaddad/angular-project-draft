var MainPage = require('../page-objects/main.po.js');

describe('Main View', function() {
  var mainPage = new MainPage();

  beforeEach(function() {
    mainPage.get();
  });

  it('should do something', function() {
  });
});
