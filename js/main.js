// 
// FADE MENU WHITE BG
// 


 $(window).scroll(function() {
// # = The point you would like to fade the white nav in
  
  if ($(window).scrollTop() > 300 ){
    
    $('.menu').removeClass('white');
    
  } else {
    
    $('.menu').addClass('white');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
