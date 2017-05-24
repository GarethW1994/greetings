
console.log('name test file loaded');

describe("store name function", function(){
    it ("should return 'Gareth'", function(){
      var name = user('Gareth');

      assert.equal(name, 'Gareth');
    });


    it ("should return undefined", function(){
      var name = user();

      assert.equal(name, undefined);
    });
})
