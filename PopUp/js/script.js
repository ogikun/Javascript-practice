$(function() {
  $('.a').on('click', function(event) {
    $('#popUpBack').fadeIn();
    $('#popUpA').fadeIn();
    event.preventDefault();
  });
  $('.b').on('click', function(event) {
    $('#popUpBack').fadeIn();
    $('#popUpB').fadeIn();
    event.preventDefault();
  });
  $('.c').on('click', function(event) {
    $('#popUpBack').fadeIn();
    $('#popUpC').fadeIn();
    event.preventDefault();
  });
  $('#popUpBack').on('click', function(event) {
    $('#popUpBack').fadeOut();
    $('.popUp').fadeOut();
    event.preventDefault();
  });
});