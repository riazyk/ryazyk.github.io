
// Slick slider final settings

$(document).ready(function(){
	$('.slider').slick({
		accessibility: true,
		autoplay: true,
		arrows: true,
		dots: true,
		dotsClass: 'slick_dots',
		infinite: true,
		prevArrow: '<button class="prevArrow"></button>',
		nextArrow: '<button class="nextArrow"></button>',
	});


// Replasing slider image for width 320px

var replacePhoto = function() { 
	if (window.matchMedia('(max-width: 320px)').matches) {

		var img = document.querySelectorAll(".slider_img");
		for(i=0; i<img.length; i++) {
			img[i].setAttribute('src','./img/sliderImage320.png');
		}

	} else {
		var img = document.querySelectorAll(".slider_img");
		for(i=0; i<img.length; i++) {
			img[i].setAttribute('src','./img/sliderImage.png');
		}
	}
};

$(window).resize(replacePhoto);
replacePhoto();  
});



// Menu toggling for mobile resolutions
// Hovering of slider's arrows


$(document).ready(function(){
	$('#mainMenuMobile').click(function(){
		$(".header__gen").toggleClass('show');
		$(".nextArrow").toggleClass('hide');
		$(".prevArrow").toggleClass('hide');
	});

	$('.left__arrow--bg').mouseover(function(){
		$('.left__arrow--bg').css('background','rgba(238,238,239,0.5');
		$('.nextArrow').css('border-bottom-color','#cb944c');
		$('.nextArrow').css('border-left-color','#cb944c');

	});
	$('.left__arrow--bg').mouseout(function(){
		$('.left__arrow--bg').css('background','rgba(203,148,76,0.8');
		$('.nextArrow').css('border-bottom-color','#fff');
		$('.nextArrow').css('border-left-color','#fff');
	});


	$('.left__arrow--bg').mouseover(function(){
		$('.left__arrow--bg').css('background','rgba(238,238,239,0.5');
	});
	$('.left__arrow--bg').mouseout(function(){
		$('.left__arrow--bg').css('background','rgba(203,148,76,0.8');
	});

	$('.right__arrow--bg').mouseover(function(){
		$('.right__arrow--bg').css('background','rgba(238,238,239,0.5');
	});
	$('.right__arrow--bg').mouseout(function(){
		$('.right__arrow--bg').css('background','rgba(203,148,76,0.8');
	});


});
