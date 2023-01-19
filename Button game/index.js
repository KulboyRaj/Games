var click=0;
$(".btn").on("click",function(){
    click++;
    $("h1").text("Clicks "+click);
    var top=Math.floor(Math.random()*700);
    var left=Math.floor(Math.random()*900);
    $(".btn").css("margin-top",top+"px");
    $(".btn").css("margin-left",left+"px");

})