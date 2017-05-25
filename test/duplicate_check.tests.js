describe("duplicateNameCheck()", function() {
    it("should return '-1' index, if name can't be found in array", function() {
        var duplicateCheck = greetedBefore('Brooke', ['Gareth', 'Tim', 'Gareth']);

        assert.equal(duplicateCheck, -1);
    });

    it("should return index position of 2 if the name was found in array", function() {
      var duplicateCheck = greetedBefore('Gareth', ['Brooke', 'Tim', 'Gareth']);

      assert.equal(duplicateCheck, 2);
    });
});
