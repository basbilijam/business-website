
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

  function handler( event ) {
    var target = $( event.target );
    if ( target.is( ".categories" ) ) {
      console.log("clicked")
      target.children().toggle();
    }
  }
  $( "div.img" ).click( handler ).find( "img" ).hide();

  // $('.categories').click(function(event){
  //   console.log('you have clicked')
  //     $('.img').html(event.target, function(){
  //         console.log('you have clicked the image')
  //       css({ // resize the image
  //     height: '500px',
  //     width: '500px'
  // });
  //     })

  // })

  window.onscroll = logScroll;

