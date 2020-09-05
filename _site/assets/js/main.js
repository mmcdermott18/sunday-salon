$(document).ready(function() {
    // run function on initial page load
    nav();
    asterisk();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
var i = 1;
function nav() {
  $('#menu-icon').click(function(){
    if (i == 1) {
      $('#menu').removeClass('hide');
      $('.hamburger').addClass('is-active');
      $('body').addClass('scroll-lock');
      i++;
    } else {
      $('#menu').addClass('hide');
      $('body').removeClass('scroll-lock');
      $('.hamburger').removeClass('is-active');
      i = 1;
    }
  });
}
function asterisk() {
  $('.spin').mouseover(function(){
    $('#asterisk-hover').removeClass('about-hide');
    console.log('mouse over');
  });
  $('.spin').mouseout(function(){
    $('#asterisk-hover').addClass('about-hide');
  });
}
