$(document).ready(function() {

  $.extend($.easing, {
    easeInOutCirc: function (x, t, b, c, d) {
      if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
      return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
    }
  });

  function scrollEvent() {
    if($(window).scrollTop() > 200) {
      $(".navbar").fadeIn("slow");
    } else {
      $(".navbar").fadeOut("slow");
    }
  }
  
  
  var debouncedScroll = _.throttle(scrollEvent, 300);

  $(window).scroll(function() {
    debouncedScroll();
  });

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $(this.hash.slice(1) +']');
      if (target.length) {
        $("html,body").animate({
          scrollTop: target.offset().top - 70
        }, 1000, "swing");
        };
        return false;
      }
    });


  $("#beta-form").parsley({
    uiEnabled: false
  });

});
