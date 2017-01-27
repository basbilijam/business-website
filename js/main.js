
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


  /* Click on product */

  $('categories').click(function(){
    console.log('you have clicked')
      var id = $(this).attr('src');
      $('src'.id).click(function(){

        id.css({ // resize the image
      height: '500px',
      width: '500px'
  });
      })

  })