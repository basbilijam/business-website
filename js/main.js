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
        .css('background-color', 'black')
        .css('opacity', '0.5')
    } else {
      $('.navbar')
        .css('position', 'fixed')
    }
  }





  window.onscroll = logScroll;

// Navbar hamburger toggle

$(".navbar-toggle").click(function(){
  $(".navbar-collapse").toggle();
});  


/* Click on product */

  /* Click on product */
  var count = 0;


 $("div.categories img").click(function(event){
  var target = $(event.target);
  console.log("clicked");

  if(target.is("img")){
    if(count % 2 === 0){
    console.log("clickedtothe Img");
    target.animate({
      height: "500px",
      width: "400px",


    });
    count += 1;
    } else {
      console.log("clickedtothe Img");
    target.animate({
      height: "400px",
      width: "300px",



    });
    count += 1;
      
    }
    };
});

 var block = false;

 $(".img1").mouseenter(function(event){


  if(!block){
    block = true;
    $(event.target).closest("button").fadeTo('slow', 1.0);
    block = false;
  }

 });

 $(".img1").mouseleave(function(event){


  if(!block){
    block = true;
    $(event.target).closest("button").fadeTo('slow', 0);
    block = false;
  }

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


