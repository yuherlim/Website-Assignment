/*
    Purpose: This javascript file contains the functions used in the feedback
            form.

    Author: Lim Yu Her
            
    Filename: feedback.js
*/

//This function asks for confirmation when user press the clear all button.
function confirmReset() {
    // if user tries to clear all when there is no input alert them
    var counter = 0;
    var elem = document.getElementById('feedbackForm').elements;
    for(var i = 0; i < elem.length; i++) {
        if (elem[i].value === "") { 
            counter++;
        }
    } 
    
    if (counter === 4) {
        alert("The fields are already empty.");
        return false;
    }

    // ask for confirmation when user wants to clear the form
    var result = confirm("Are you sure you want to clear all fields?")
    if (result) {
        document.forms["feedbackForm"].reset();
    }
}

//This function just asks for confirmation when user submits their message for feedback form.
function confirmSubmit() {
    var result = confirm("Are you sure that you have written everything you wanted in your message?")
    if (result) {
        return true;
    } else {
        return false;
    }
}
