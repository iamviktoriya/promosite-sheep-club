$(document).ready(function(){

  $(".productplashka").click(function(){
    $(".choseproduct").show(250),
    $(".background").show(200);
    $(".blur").show();
  });


  $(".next1").click(function(){
    $(".choseproduct").hide(200),
    $(".forma").show(250);
});

  $(".cross").click(function(){
    $(".forma").hide(200),
    $(".choseproduct").hide(200),
    $(".background").hide(250),
    $(".blur").hide();
  });
  $(".cross2").click(function(){
    $(".forma").hide(200),
    $(".choseproduct").hide(200),
    $(".background").hide(250),
    $(".blur").hide();
  });

  $(".textbut").click(function(){
    $(".forma").hide(200),
    $(".forma_after").show(700),
    $(".forma_after").delay(2000).hide(200),
    $(".background").delay(3200).hide(200);
    $(".blur").hide();


});
});

  

 