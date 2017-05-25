describe('addNameToArr()', function() {
  it("should return 'false' if given a state is =>  0 ", function() {
    var addedToArray = pushNameToArray('Gareth', 2);

    assert.equal(addedToArray, false);
  });
})
