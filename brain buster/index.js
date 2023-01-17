var arr = [];
var color1 = ["green", "red", "yellow", "blue"]
var  flag = 1, level = 0, count1 = 0;
$("body").on("keypress", function (event) {
    $("h1").text("game start");
    randomGenarator();
    $("body").removeClass("game-over");

    flag=1;
})
function randomGenarator() {
    var ramdom1 = Math.floor((Math.random()) * 4);
    arr.push(color1[ramdom1]);
    $("." + color1[ramdom1]).fadeOut(100);
    var audio = new Audio("sounds/" + color1[ramdom1] + ".mp3");
    audio.play();
    $("." + color1[ramdom1]).fadeIn(100);
}
function game_over(){
    $("body").addClass("game-over");
}
$(".btn").on("click", function (event) {
    if(arr[count1]===event.target.id){
        count1++;
        $("." + event.target.id).fadeOut();
        var audio = new Audio("sounds/" + event.target.id + ".mp3");
        audio.play();
        $("." + event.target.id).fadeIn();
    }
    else{
        var audio = new Audio("sounds/wrong.mp3");
        audio.play();
        level = 0;
        count1 = 0;
        arr = [];
        $("h1").text("Press A Key to Start");
        game_over();
        flag=0;
    }
    if(count1===arr.length & flag){
        $("h1").text("Level " + ++level);
        count1=0;
        setTimeout(function () {
            randomGenarator();
        }, 1000);
    }
})



