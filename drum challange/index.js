function abc() {
    var value=this.innerHTML;
    makesound(value);

}

function makesound(value) {
    switch (value) {
        case "w":
            var audio1 = new Audio("tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio1 = new Audio("tom-3.mp3");
            audio1.play();
            break;
        case "d":
            var audio1 = new Audio("tom-4.mp3");
            audio1.play();
            break;
        case "j":
            var audio1 = new Audio("snare.mp3");
            audio1.play();
            break;
        case "k":
            var audio1 = new Audio("crash.mp3");
            audio1.play();
            break;
        case "l":
            var audio1 = new Audio("kick-bass.mp3");
            audio1.play();
            break;
        default:
            break;
    }
}

for (var i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", abc);
   
}

document.addEventListener("keypress",function(){
    makesound(event.key);
});

