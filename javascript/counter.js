  function checkCounterState(counterState) {
      //check if the counter is > 0
      if (localStorage.counter > 0) {
          //check if the counter state evalutes to true
          if (counterState == true) {
              //save the counter value from local storage to new counter variable
              newCounter = localStorage.counter;

              //increment the counter
              newCounter++;

              //save the new counter value to localStorage
              localStorage.counter = newCounter;
          }

        } else {


          //increment the counter
          newCounter++;
          //save the new counter value to localStorage
          localStorage.counter = newCounter;
      }
  }

  //reset counter
  function resetCounter(counter) {
      //check counter state if > 0 then reset
      if (localStorage.counter > 0 || localStorage.counter != 0) {
          localStorage.setItem('counter', 0);
      }

      counter.innerHTML = localStorage.counter
  }

  //display counter
  function displayCounter(counter) {
      //display counter
      counter.innerHTML = newCounter;
  }
