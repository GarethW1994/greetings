

describe('generateGreeting()', function() {

    it("should return 'Hello, Gareth'", function() {
      var greeting = createGreeting('Gareth', 'Hello');

      assert.equal(greeting, 'Hello, Gareth');
    });

    it("should return 'Molo, John'", function() {
      var greeting = createGreeting('John', 'Molo');

      assert.equal(greeting, 'Molo, John');
    });

    it("should return 'Goeie Dag, John'", function() {
      var greeting = createGreeting('John', 'Goeie Dag');

      assert.equal(greeting, 'Goeie Dag, John');
    });
});
