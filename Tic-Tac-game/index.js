
var arr = [["1", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]];
var flag=1;
var toggle = 2;
var result;
$("body").on("keypress", function (event) {
    if(flag!=0){
         toggle = 2;
        $(".player").show();
        $(".player").text="player 1";
        $(".btn").removeClass("x"); 
        $(".btn").removeClass("o");
    $(".heading").text("Game start");
    flag=0;
    play();
    }
})
function play() {
    $(".btn").on("click", function (event) {
        var number1 = Number(event.target.id);
        if (toggle === 2) {
            arr[Math.round(number1 / 10)][number1 % 10] = "x";
            $("#" + event.target.id).addClass("x");
            toggle = 1;
            $(".player").text("player 2");
            result = calculateResult();
        }
        else if (toggle === 1) {
            arr[Math.round(number1 / 10)][number1 % 10] = "o";
            $("#" + event.target.id).addClass("o");
            toggle = 2;
            $(".player").text("player 1");
            result = calculateResult();
        }
        if (result === 0) {
            $(".heading").text("player "+toggle+" win");
            $(".player").hide();
            flag=1;
            if(toggle===2){
                $(".btn").removeClass("x");
            }
            else{
                $(".btn").removeClass("o");
                
            }
            arr = [["1", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]];  
        }
    })
    return 0;
}

function calculateResult() {
    if (arr[0][0] + arr[0][1] + arr[0][2] === "xxx" || arr[0][0] + arr[0][1] + arr[0][2] === "ooo") {
        return 0;
    }
    else if (arr[0][0] + arr[1][0] + arr[2][0] === "xxx" || arr[0][0] + arr[1][0] + arr[2][0] === "ooo") {
        return 0;
    }
    else if (arr[0][1] + arr[1][1] + arr[2][1] === "xxx" || arr[0][1] + arr[1][1] + arr[2][1] === "ooo") {
        return 0;
    }
    else if (arr[0][2] + arr[1][2] + arr[2][2] === "xxx" || arr[0][2] + arr[1][2] + arr[2][2] === "ooo") {
        return 0;
    }
    else if (arr[1][0] + arr[1][1] + arr[1][2] === "xxx" || arr[1][0] + arr[1][1] + arr[1][2] === "ooo") {
        return 0;
    }
    else if (arr[2][0] + arr[2][1] + arr[2][2] === "xxx" || arr[2][0] + arr[2][1] + arr[2][2] === "ooo") {
        return 0;
    }
    else if (arr[0][0] + arr[1][1] + arr[2][2] === "xxx" || arr[0][0] + arr[1][1] + arr[2][2] === "ooo") {
        return 0;
    }
    else if (arr[0][2] + arr[1][1] + arr[2][0] === "xxx" || arr[0][2] + arr[1][1] + arr[2][0] === "ooo") {
        return 0;
    }
    else {
        return 1;
    }
}




