
var lengthOfButtons = document.querySelectorAll(".drum").length;
var sounds = ["sounds/tom-1.mp3", "sounds/tom-2.mp3", "sounds/tom-3.mp3", "sounds/tom-4.mp3", "sounds/crash.mp3", "sounds/kick-bass.mp3", "sounds/snare.mp3"];


for (var i = 0; i < lengthOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInner = this.innerHTML;
        
        /* Sound */
        play(buttonInner);

        /* Animation */
        buttonAnimation(buttonInner);
    });
}

document.addEventListener("keypress", function(event) {
    
    var keyPressed = event.key;

    /* Sound */
    play(keyPressed);
     
    /* Animation */
    buttonAnimation(keyPressed);
});


/* Functions------------------------------------------------------------------------------------ */


function play(key) {
    switch (key) {
        case "w":
            playSound(sounds[0]);    
            break;
        case "a":
            playSound(sounds[1]);    
            break;
        case "s":
            playSound(sounds[2]);    
            break;
        case "d":
            playSound(sounds[3]);    
            break;
        case "j":
            playSound(sounds[4]);    
            break;
        case "k":
            playSound(sounds[5]);    
            break;
        case "l":
            playSound(sounds[6]);    
            break;

        default:
            break;
    }
}


function playSound(soundToPlay) {
    var sound = new Audio(soundToPlay);
    sound.play();
}

function buttonAnimation(keyPressed) {
    var activeButton = document.querySelector("." + keyPressed);
    
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
