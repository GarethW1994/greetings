console.log('get_radio_value loaded');

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
