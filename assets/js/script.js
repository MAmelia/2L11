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

 $(window).on('resize', function(){
      var win = $(this);
      if (win.width() < 770) { 

      $('footer').addClass('mobile');

      }
    else
    {
        $('footer').removeClass('mobile');
    }

});