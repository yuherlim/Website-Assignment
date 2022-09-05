/*
    Author: Lim Yu Her
    
    Filename: navbar.js

    Purpose: This javascript file contains the function to display additional navigation
             through the navicon.

*/

// javascript for the navicon button
function navButton() {
    var x = document.getElementById("submenu");
    if (x.className === "normal") {
        x.className += " responsive";
    } else {
        x.className = "normal";
    }
}