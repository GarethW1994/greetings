function mainFunction(namesGreetedList) {
      //get the radio button value from function
      var radio = getRadioValue(radioButtons);

      //determine the language
      var language = getLanguage(radio);

      //call function storing name
      var name = user(userName.value);

      //call function generating the greeting message
      var getGreeting = createGreeting(name, language);

      //call function that displays message to DOM
      displayGreeting(output, getGreeting);

      ///check in the last if the name exists
      var findNameState = greetedBefore(userName.value, namesGreetedList);

      var counterState = pushNameToArray(userName.value, findNameState);

      //check counter state
      checkCounterState(counterState);

      //display counter to the user
      displayCounter(counter);

      //clear textbox and set focus
      clearTextbox(userName);
}


function clearTextbox(textbox) {
      //clear textbox
      textbox.value = '';
      textbox.focus();
}
