console.log('get_language loaded');

//Get Radio Buttons values
function getRadioValue(radioButtons) {
    //languages arrray
    var languages = ["Hello", "Groete", "Molo"];

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
