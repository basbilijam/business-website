/* sticky Navbar */

var navPositionY = $('.navbar').offset().top;

function logScroll(){
  
if ($(window).scrollTop() >= navPositionY){
  $('.navbar')
    .css ('position','fixed')
    .css('top','0')
    .css ('right','0')
    .css ('z-index', '2')
    .css('width', '100%')
    .css('background-color', 'black')
    .css('opacity', '0.5')
}
else if ($(window).scrollTop() == 0){
  $('.navbar')
  .css('background-color', 'transparent')
  .css ('border-style', 'none')
} else {
  $('.navbar')
   .css ('position','relative')   
  }
}

window.onscroll = logScroll;

