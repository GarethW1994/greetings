//Get Radio Buttons values
function getRadioValue(radioButtons) {

    //empty variable to store selected language preference
    var value = "";

    //determine which language was selected
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            //save the selected language in 'lang' variable
            value = radioButtons[i].value;
        }
    }

  return value;
}

//Get Radio Buttons values
function getLanguage(radioVal) {

    //languages arrray
    var languages = ["Hello", "Goeie Dag", "Molo"];

    //Return the correct greeting based on language preference
    if (radioVal === 'English') {
        return languages[0];
    } else if (radioVal === 'Afrikaans') {
        return languages[1];
    } else {
        return languages[2];
    }
}
