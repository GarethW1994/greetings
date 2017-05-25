//select DOM elements
  var userName = document.getElementById('name');
  var textbox = document.querySelector('.textboxField');
  var output = document.querySelector('#output');
  var buttonGreet = document.getElementById('greetMe');
  var buttonReset = document.getElementById('resetMe');
  var radioButtons = document.getElementsByName('language');
  var counter = document.getElementById('counter');

  //counter
  var newCounter = 0;

  //userName object
  var namesGreeted = [];


  //on load function
  window.onload = function() {
    //Call the check function state function
    //display counter to user
    if (localStorage.counter === undefined) {
        localStorage.setItem('counter', JSON.stringify(0));

        counter.innerHTML = localStorage.counter;
    } else {
        counter.innerHTML = localStorage.counter;
    }
  };

  //greetMe button click
  buttonGreet.addEventListener("click", function() {
    //call main function
    mainFunction(namesGreeted);
  }, false);


  //resetMe button click
  buttonReset.addEventListener("click", function() {
    //call function to reset counter
    resetCounter(counter);
  }, false);
