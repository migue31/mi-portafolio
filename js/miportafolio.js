$(document).ready(function(){
 $("#menu").click(function(){
    $(this).toggleClass('fa-times');
    $('Header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('Header').removeClass('toggle');

  });
});