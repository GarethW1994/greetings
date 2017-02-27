//select elements
var userName = document.getElementById('name');
var textbox = document.querySelector('.textboxField');
var output = document.querySelector('#output');
var buttonGreet = document.getElementById('greetMe');
var buttonReset = document.getElementById('resetMe');
var radioButtons = document.getElementsByName('language');
var counter = document.getElementById('counter');

//languages arrray
var languages = ["Hello", "Groete", "Molo"];

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
    //save the user name in a variable
    var name = userName.value;

    //get the language radio button
    var language = getRadioValue();

    //display output to user
    output.innerHTML = language + " " + name;

    //check if the counter is > 0
    //save counter to newCounter variable
    if (localStorage.counter > 0) {
        newCounter = localStorage.counter;
    } else {
        newCounter = 0;
    }


    ///save value from greetedBefore function
    var nameExist = greetedBefore();

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

    counter.innerHTML = localStorage.counter;
}

//Get Radio Buttons values
function getRadioValue() {
    //empty variable to store selected language preference
    var lang = "";

    //determine which language was selected
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            //save the selected language in 'lang' variable
            lang = radioButtons[i].value;
        }
    }

    //Return the correct greeting based on language preference
    if (lang === 'English') {
        return languages[0];
    }

    if (lang === 'Afrikaans') {
        return languages[1];
    } else {
        return languages[2];
    }
}

//check for who was greeted before
function greetedBefore() {
    //variable to save output
    var bool = false;
    //save the user name in a variable
    var name = userName.value;

    //check if array is empty
    for (var i = 0; i < namesGreeted.length; i++) {
        //empty array check
        if (namesGreeted.length === 0) {
            bool = false;
        }

        //check for name
        if (namesGreeted[i] === name) {
            bool = true;
        } else {
            bool = false;
        }
    }

    return bool;
};
