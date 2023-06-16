$(function(){
  $(window).scroll(function(){
    let srcTop = $(window).scrollTop()
    if( srcTop > 900){  $(".nav").addClass('manuActive');
    $(".scrollToTop").slideDown();
  
  }
    else{ $(".nav").removeClass('manuActive');
    $(".scrollToTop").slideUp();
  }

  })
  
})
$(".scrollToTop").click(function (){
  $('html,body').animate({ scrollTop:0}, 2000)
});

$(".dark").click(function(){
 
  $('html').css( {"background-color": "black"});
  $("a,h1,h2,h3,h4,h5,h6,p").css({ "color":"white"})
  $("i").css({"color":"black"})

})