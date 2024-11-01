$(document).ready(function(){
  $('#slider').slick({
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: true, 
  });

  $(".hamburger").click(function(){ 
      $(".hamburger, nav, .mask").toggleClass("active");
  });
});
