
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

 HEAD
  window.onscroll = logScroll;


  /* Click on product */

  $('.category').click(function(event){
    console.log('you have clicked')
      $('.img').click(function(){

        css({ // resize the image
      height: '500px',
      width: '500px'
  });
      })

  })

  window.onscroll = logScroll;
 f8f1b42d37ab473a0d7c1637d37f6f4e86398662
