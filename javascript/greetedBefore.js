  //check for who was greeted before
  function greetedBefore(userName, list) {
      return list.indexOf(userName);
  };



  function pushNameToArray(name, result) {
  //check if name is in array
    if (result < 0) {
        namesGreeted.push(name);

        return true;
      } else {
        return false;
      }
  }
