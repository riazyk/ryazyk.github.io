$(".logo").click(function() {
  $( this ).slideUp();
});

$(document).ready(function(){
	
$('input[name=referer]').val(document.referrer);
var phrase = referer();
$('input[name=phrase]').val(phrase.query);
	
$('button').on('click',function(){
	if ($(this).hasClass('off')) {
		alert('You have already submitted a request. Do you want one more time? - Please, refresh the page.');
		event.preventDefault();
	}
});
	$('form').on('submit',function(){
		var url_data = $(this).serialize();
		
		$.ajax({
	      type: "POST",
	      context: this,
	      url: "send.php",
	      data:url_data,
	      success: function(v) {
			if (v == '1') { $(this).find('.pulse').removeClass('pulse').addClass('off').text('Sent'); alert('Your request has been sent!'); }
			else { alert('An error occurred while sending, please repeat later'); };
	      },
	      error: function() {
	      	alert('Send Error: Service unavailable');
	      }
	     });
     
		event.preventDefault();
	});
});

$( document ).ready(function() {

	setTimeout(function(){
		setTimeout(function(){ $('.box2 .btn1').addClass("pulse");},100);
		setTimeout(function(){ $('.box4 .btn1').addClass("pulse");},100);
		setTimeout(function(){ $('.box6 .btn1').addClass("pulse");},100);
		setTimeout(function(){ $('.box10 .btn1').addClass("pulse");},100);
		setTimeout(function(){ $('.box12 .btn1').addClass("pulse");},100);

		setTimeout(function(){ $('.box2 .row2 .col').addClass("slideLeft");},400);

	},1000);


	$(window).scroll(function() {
		$('.box3 h3').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+300) {
				$(this).addClass("expandUp");
			}
		});
	});
	$(window).scroll(function() {
		$('.box10 .wrap').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideLeft");

			}
		});
	});
	$(window).scroll(function() {
		$('.box10 .incut h4').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");

			}
		});
	});
	$(window).scroll(function() {
		$('.box4 .incut h4').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");

			}
		});
	});
	$(window).scroll(function() {
		$('.box6 .incut h4').each(function(){
			var imagePos = $(this).offset().top;

			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");

			}
		});
	});


});

$('#slides').slides({
				generateNextPrev: true,
				generatePagination: false,
				play: 5000,
				pause: 2500,
				hoverPause: true				
});

(function($) {
	$(function() {
		var jcarousel = $('.box9 .jcarousel');
		jcarousel.on('jcarousel:reload jcarousel:create', function () {
			var width = jcarousel.innerWidth();
			width = width / 4;
			jcarousel.jcarousel('items').css('width', width + 'px');
		}).jcarousel({wrap: 'circular'});

		$('.box9 .jcarousel-control-prev')
		.jcarouselControl({
			target: '-=1'
		});

		$('.box9 .jcarousel-control-next')
		.jcarouselControl({
			target: '+=1'
		});
	});
})(jQuery);

$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// }
		}
	});
});

(function() {
	$(function() {
		var jcarousel = $('.popup1 .jcarousel');
		jcarousel.on('jcarousel:reload jcarousel:create', function () {
			var width = jcarousel.innerWidth();
			width = width / 4;
			jcarousel.jcarousel('items').css('width', width + 'px');
		}).jcarousel({wrap: ''});

		$('.popup1 .jcarousel-control-prev')
		.jcarouselControl({
			target: '-=4'
		});

		$('.popup1 .jcarousel-control-next')
		.jcarouselControl({
			target: '+=4'
		});
	});


	var container = $('.popup1')
	container.find('.jcarousel .item').on('click', function() {
		var $this = $(this),
			ratio = $this.children('img').data('num');


		$this.addClass('active').siblings('.item').removeClass('active');
		container.find('.colL .wrap').find('img').eq(ratio).fadeIn(600).siblings('img').hide();
	})
})(jQuery);

$(document).ready(function() {
	$('.open-popup').magnificPopup({
		type: 'inline',
		fixedBgPos: true,
		overflowY: 'auto',
		closeBtnInside: true,
		preloader: false,
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-slide-bottom'
	});

	var container = $('.popup-tovar');
	$('.box3 .btn1').on('click', function() {
		var title = $(this).parent('.wrap3').find('h4').text();

		container.find('input.tarif').attr('value', '' + title);
		container.find('.title').text();
		container.find('.title').text(title);
	});

	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
	});

	$('.link-off').on('click', linkoff);
	function linkoff(e) {
		e.preventDefault();
	};
});

(function($) {
	$(function() {
		var jcarousel = $('.box8 .jcarousel');
		jcarousel.on('jcarousel:reload jcarousel:create', function () {
			var width = jcarousel.innerWidth();
			width = width / 3;
			jcarousel.jcarousel('items').css('width', width + 'px');
		}).jcarousel({wrap: 'circular'});

		$('.box8 .jcarousel-control-prev')
		.jcarouselControl({
			target: '-=1'
		});

		$('.box8 .jcarousel-control-next')
		.jcarouselControl({
			target: '+=1'
		});

	});
})(jQuery);

(function() {
	var container = $('.box3');
	container.find('.container .wrap1').eq(0).show();
	container.find('.row1 .item').on('click', function() {
		var num = $(this).index('.row1 .item');
		container.find('.container .wrap1').eq(num).fadeIn().siblings('.wrap1').hide();
		container.find('.row1 .item').eq(num).addClass('active').siblings('.item').removeClass('active');
	})
})(jQuery)
		
function referer(){
    engines = 
    [
        {start:'http://www.google.', query:'q', name:'google'},
        {start:'http://yandex.', query:'text', name:'yandex'},
        {start:'rambler.ru/search', query:'query', name:'rambler'},
        {start:'http://go.mail.ru/', query:'q', name:'mailru', cp1251:true},
        {start:'http://www.bing.com/', query:'q', name:'bing'},
        {start:'search.yahoo.com/search', query:'p', name:'yahoo'},
        {start:'http://ru.ask.com/', query:'q', name:'ask'},
        {start:'http://search.qip.ru/search', query:'query', name:'qip'}
    ];

    var ref=document.referrer,req="",engine="", start, cp1251;

    for (var i in engines){
        if  (!engines.hasOwnProperty(i))
            continue;
        if (ref.indexOf(engines[i].start)==-1)
            continue;
        start = ref.indexOf('?' + engines[i].query + '=') 
        if (start == -1){
            start = ref.indexOf('&' + engines[i].query + '=');
            if (start == -1)
                return false;
        }
        engine = engines[i].name;
        req = engines[i].query;
        cp1251 = engines[i].hasOwnProperty('cp1251');
    }
    if (!engine)
        return false;
    ref = ref.substr(start + req.length + 2);
    var end = ref.indexOf('&');
    if (end != -1)
            ref = ref.substr(0, end);
    if (cp1251){
        function win2unicode(str) {
            var charmap   = unescape(
            "%u0402%u0403%u201A%u0453%u201E%u2026%u2020%u2021%u20AC%u2030%u0409%u2039%u040A%u040C%u040B%u040F"+
            "%u0452%u2018%u2019%u201C%u201D%u2022%u2013%u2014%u0000%u2122%u0459%u203A%u045A%u045C%u045B%u045F"+
            "%u00A0%u040E%u045E%u0408%u00A4%u0490%u00A6%u00A7%u0401%u00A9%u0404%u00AB%u00AC%u00AD%u00AE%u0407"+
            "%u00B0%u00B1%u0406%u0456%u0491%u00B5%u00B6%u00B7%u0451%u2116%u0454%u00BB%u0458%u0405%u0455%u0457")
            var code2char = function(code) {
               if(code >= 0xC0 && code <= 0xFF) return String.fromCharCode(code - 0xC0 + 0x0410)
               if(code >= 0x80 && code <= 0xBF) return charmap.charAt(code - 0x80)
               return String.fromCharCode(code)
            }
            var res = ""
            for(var i = 0; i < str.length; i++) res = res + code2char(str.charCodeAt(i))
            return res
        }
        ref = unescape(ref);
        ref = win2unicode(ref);
    }else
        ref = decodeURIComponent(ref);
    ref = ref.replace(/[+]+/g, ' ')
    return {"engine": engine, "query": ref};
}
