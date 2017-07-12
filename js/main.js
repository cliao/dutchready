jQuery(document).ready(function($){
	var contentSections = $('.cd-section'),
		navigationItems = $('#cd-vertical-nav a');

	updateNavigation();
	$(window).on('scroll', function(){
		updateNavigation();
	});

	//smooth scroll to the section
	navigationItems.on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    //open-close navigation on touch devices
    $('.touch .cd-nav-trigger').on('click', function(){
    	$('.touch #cd-vertical-nav').toggleClass('open');
  
    });
    //close navigation on touch devices when selectin an elemnt from the list
    $('.touch #cd-vertical-nav a').on('click', function(){
    	$('.touch #cd-vertical-nav').removeClass('open');
    });

	function updateNavigation() {
		contentSections.each(function(){
			$this = $(this);
			var activeSection = $('#cd-vertical-nav a[href="#'+$this.attr('id')+'"]').data('number') - 1;
			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
				navigationItems.eq(activeSection).addClass('is-selected');
			}else {
				navigationItems.eq(activeSection).removeClass('is-selected');
			}
		});
	}

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

// 
// FADE IN NAV
// 

  $(window).scroll(function() {
// # = The point you would like to fade the blue nav in.
  
  if ($(window).scrollTop() > 550 ){
    
    $('.fade').addClass('show');
    
  } else {
    
    $('.fade').removeClass('show');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
 


// 
// FADE BG
// 

 $(window).scroll(function() {
// # = The point you would like to fade the blue nav in
  
  if ($(window).scrollTop() > 200 ){
    
    $('.background').removeClass('show');
    
  } else {
    
    $('.background').addClass('show');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

 $(window).scroll(function() {
// # = The point you would like to fade the white nav away
  
  if ($(window).scrollTop() > 600 ){
    
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



 $(window).scroll(function() {
// # = The point you would like to fade the hero out.
  
  if ($(window).scrollTop() > 70 ){
    
    $('.hero').removeClass('show');
    
  } else {
    
    $('.hero').addClass('show');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});
