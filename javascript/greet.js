//select elements
var userName = document.getElementById('name');
var textbox = document.querySelector('.textboxField');
var output = document.querySelector('#output');
var buttonGreet = document.getElementById('greetMe');
var buttonReset = document.getElementById('resetMe');
var radioButtons = document.getElementsByName('language');
var counter = document.getElementById('counter');



//on load function
window.onload = function() {
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
    main_function();
}, false);


//resetMe button click
buttonReset.addEventListener("click", function() {
    resetCounter();
}, false);

//reset counter
function resetCounter() {
    //check counter state if > 0 then reset
    if (localStorage.counter > 0 || localStorage.counter != 0) {
        localStorage.setItem('counter', 0);
    }

    counter.innerHTML = localStorage.counter
  }
