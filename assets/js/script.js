$(function(){
    $('.carousel').carousel({
      interval: 3000
    });
});

 $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 100) {
          $(this).addClass("slide");
        }
    });
  });