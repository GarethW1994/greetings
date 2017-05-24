describe("Get Language", function(){

  it("should return 'Hello' when given a English language choice", function() {
    var language = get_language('English');

    assert.equal(language, 'Hello');
  });

  it("should return 'Goeie Dag' when given a Afrikaans language choice", function() {
    var language = get_language('Afrikaans');

    assert.equal(language, 'Goeie Dag');
  });

  it("should return 'Molo' when given a Xhosa language choice", function() {
    var language = get_language('isiXhosa');

    assert.equal(language, 'Molo');
  });
})
