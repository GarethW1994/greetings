  //check for who was greeted before
  function greetedBefore(userName, list) {
      return list.indexOf(userName);
  };
  
  function pushNameToArray(name, result) {
  //check the given result and add name to the array
    if (result < 0) {
        namesGreeted.push(name);

        return true;
      } else {
        return false;
      }
  }
