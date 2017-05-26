var TheCounter = function(params) {
  var counter = 0;

  var greetedUsers = {};

//  console.log(params);

  function usersGreeted(name) {

      if (greetedUsers[name] === undefined) {
          counter++;
        }
          greetedUsers[name] =+ 1;

          return greetedUsers;
  }

  function greetCounter() {
          return counter;
  }

  function on(key, fn) {
      key["update"] = fn

      console.log(fn);
  }

  //console.log(params);

  return {
        usersGreeted,
        greetCounter,
        on
  }
}
