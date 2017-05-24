console.log('get_language loaded');

//Get Radio Buttons values
function get_language(radioVal) {

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
