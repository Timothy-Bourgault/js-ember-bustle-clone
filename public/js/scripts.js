$(document).ready(function() {
  $window = $(window);
  $window.scroll(function() {
    $scroll_position = $window.scrollTop();
    if ($scroll_position > 470) {
      $('.nav-main_sticky').addClass('sticky');
      header_height = $('.nav-main_sticky').innerHeight();
      $('body').css('padding-top', header_height);
    } else {
      $('body').css('padding-top', 0);
      $('.nav-main_sticky').removeClass('sticky');
    }
  });
});
