descibe("check for duplicate", function() {
    it("should return 'true' when detecting a duplicate name", function() {
        var duplicateCheck = greetedBefore('Gareth', ['Gareth', 'Tim', 'Gareth']);

        assert.equal(duplicateCheck, true);
    });
});
