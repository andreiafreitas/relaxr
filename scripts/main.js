$(document).ready(function() {


  $('.readmore').on('click', function(e){
    e.preventDefault();
    $('#show-this').slideDown();
    $('.readmore').hide();
    $('.readless').show();
  });

  $('.readless').on('click', function(e){
    e.preventDefault();
    $('#show-this').slideUp();
    $('.readless').hide();
    $('.readmore').show();
  });

  $('.learnmore').on('click', function(e){
    e.preventDefault();
    $('#learnmore').slideDown();
    $('.learnmore').hide();
  });
});
