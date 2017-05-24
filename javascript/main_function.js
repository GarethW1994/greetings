function main_function() {
      //counter
      var newCounter = 0;

      //userName object
      var namesGreeted = [];

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

}
