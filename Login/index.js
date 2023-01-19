var toggle = 1;
var password = "abc";
$(".btn").on("mouseenter", function () {
  var a = $(".login1").val();
  if (a === password) {
    
    $(".btn").removeClass("margin-right");
    $(".btn").removeClass("margin-left");
  } else {
    if (toggle === 1) {
      $(".btn").addClass("margin-left");
      $(".btn").removeClass("margin-right");
      toggle = 2;
    } else if (toggle === 2) {
        $(".btn").removeClass("margin-left");
      $(".btn").addClass("margin-right");
      
      toggle = 1;
    }
  }
});
