
 		
		$.fn.equalHeights = function(){
		var max_height = 0;
		$(this).each(function(){
			max_height = Math.max($(this).height(), max_height);
		});
		$(this).each(function(){
			$(this).height(max_height);
		});
	};

	$(document).ready(function(){
	    $('.xyz').equalHeights();
	    $('.same-h').equalHeights();
	    $('.one-s').equalHeights();
	    $('.s-text p').equalHeights();
	    $('.single_counter').equalHeights();
	    $('.left-side').equalHeights();	
	    $('.l-l').equalHeights();	  	    
	    $('.s-s').equalHeights();	  	    
	});
	 	

 		$('.slick-main').slick({ 			
  			infinite: true,
  			speed: 600,
  			fade: true,
  			cssEase: 'ease-in-out',
    		touchThreshold: 100,
  			autoplay: true,
  			dots: false,
  			arrows :false
 		});

 		new WOW().init();
 	

 	// When the user scrolls the page, execute myFunction 
	window.onscroll = function() {myFunction()};

	// Get the header
	var header = document.getElementById("myHeader");

	// Get the offset position of the navbar
	var sticky = header.offsetTop;

	// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}
 	
 		// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();
 	
 		//testimonial slider
 		$(document).ready(function(){
		    $("#testimonial-slider").owlCarousel({
		        items:1,
		        itemsDesktop:[1000,1],
		        itemsDesktopSmall:[980,1],
		        itemsTablet:[768,1],
		        itemsMobile:[650,1],
		        pagination:true,
		        navigation:false,
		        slideSpeed:1000,
		        autoPlay:true,
		        infinite:true,
		        autoHeight:true
		    });
		});
 	
 	
		function openNav() {
		  document.getElementById("mySidenav").style.width = "100%";
		}

		function closeNav() {
		  document.getElementById("mySidenav").style.width = "0";
		}		