function checkCounterState(counter) {
  //check if the counter is > 0
  //save counter to newCounter variable
  if (counter > 0) {
      newCounter = localStorage.counter;
  } else {
      newCounter = 0;
  }
}
