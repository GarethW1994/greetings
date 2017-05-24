console.log('duplication ceck loaded');

//check for who was greeted before
function greetedBefore(userName, list) {
    //variable to save output
    var bool = false;

    //check if array is empty
    for (var i = 0; i < list.length; i++) {
        //empty array check
        if (list.length === 0) {
            bool = false;
        }

        //check for name
        if (namesGreeted[i] === userName) {
            bool = true;
        } else {
            bool = false;
        }
    }

    return bool;
};
