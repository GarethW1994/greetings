describe("TheCounter", function() {
    it("should increase the counter when a new user is greeted", function() {
      var theCounter = new TheCounter;

      theCounter.usersGreeted('Bill');
      theCounter.usersGreeted('Sarah');
      theCounter.usersGreeted('Gareth');

      assert.equal(3, theCounter.greetCounter());
    });

    it("should not increase the counter when an existing user is greeted", function() {
      var theCounter = new TheCounter;

      theCounter.usersGreeted('Bill');
      theCounter.usersGreeted('Bill');
      theCounter.usersGreeted('Gareth');


      assert.equal(2, theCounter.greetCounter());
    });

    it("should return the total number of users that was greeted", function(done) {
      var theCounter = new TheCounter;

      theCounter.on('change', function() {
          theCounter({
              "Bill" : 7
          })
      });

      theCounter.usersGreeted('Bill');

      console.log(theCounter.greetCounter());
    done();

      //theCounter.usersGreeted('Bill');

      //assert.equal(1, theCounter.greetCounter());

    });
});
