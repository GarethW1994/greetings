describe("getLanguage()", function(){

  it("should return 'Hello' when given a English language choice", function() {
    var language = getLanguage('English');

    assert.equal(language, 'Hello');
  });

  it("should return 'Goeie Dag' when given a Afrikaans language choice", function() {
    var language = getLanguage('Afrikaans');

    assert.equal(language, 'Goeie Dag');
  });

  it("should return 'Molo' when given a Xhosa language choice", function() {
    var language = getLanguage('isiXhosa');

    assert.equal(language, 'Molo');
  });
})
