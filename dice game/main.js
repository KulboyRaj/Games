var player1= Math.floor((Math.random())*6)+1;
var player2= Math.floor((Math.random())*6)+1;
if(player1>player2){
    document.querySelector("h1").innerText="sakshi win";
    document.getElementsByClassName("player1_dice")[0].innerText=player1;
    document.getElementsByClassName("player2_dice")[0].innerText=player2;
    
}
else if(player1<player2){
    document.querySelector("h1").innerText="pruthviraj win";
    document.getElementsByClassName("player1_dice")[0].innerText=player1;
    document.getElementsByClassName("player2_dice")[0].innerText=player2;
    
}



