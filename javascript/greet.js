//select elements
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

    //get the radio button value from function
    var radio = getRadioValue(radioButtons);

    //determine the language
    var language = get_language(radio);

    //call function storing name
    var name = user(userName.value);

    //call function generating the greeting message
    var getGreeting = createGreeting(name, language);

    //call function that displays message to DOM
    displayGreeting(output, getGreeting);

    //check if the counter is > 0
    //save counter to newCounter variable
    if (localStorage.counter > 0) {
        newCounter = localStorage.counter;
    } else {
        newCounter = 0;
    }


    ///save value from greetedBefore function
    var nameExist = greetedBefore(name, namesGreeted);

    //check if name is in array
    if (nameExist === false) {
        namesGreeted.push(name);
        newCounter++;
    };





    //display counter
    counter.innerHTML = newCounter;
    //save the new counter value
    localStorage.counter = newCounter;



    //clear textbox
    userName.value = '';
    userName.focus();
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
