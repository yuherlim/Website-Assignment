/*
    Author: Lim Yu Her
    
    Filename: playpause.js

    Purpose: This javascript file contains the functions to play and pause the music in our website.

*/

var myAudio = document.getElementById("audio1"); 
var play = document.getElementsByClassName('play-btn');
var pause = document.getElementsByClassName('pause-btn');
var musicText = document.getElementById('music');

//function to play and pause the music when the play/pause button is pressed.
//The text music is also displayed everytime the music is not playing.
function playPause() {
    if (myAudio.paused) {
        myAudio.play(); 
        play[0].style.display = "none";
        pause[0].style.display = "block";
        music.style.display = "none";
    } else {
        myAudio.pause();
        play[0].style.display = "block";
        pause[0].style.display = "none";
        music.style.display = "block";
    }
}