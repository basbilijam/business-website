$(document).ready(function(){
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

 $("div.categories img").click(function(event){
  var target = $(event.target);
  console.log("clicked");

  if(target.is("img")){
    console.log("clickedtothe Img");
    target.animate({
      height: "500px",
      width: "400px",

    });
    };
});



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

});

