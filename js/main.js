
/* sticky Navbar */

var navPositionY = $('.navbar').offset().top;

  function logScroll() {

   
    if ($(window).scrollTop() >= navPositionY) {
      $('.navbar')
        .css('position', 'fixed')
        .css('top', '0')
        .css('left', '0')
        .css('width', '100%')
    } else {
      $('.navbar')
        .css('position', 'fixed')

    }
  }

  window.onscroll = logScroll;