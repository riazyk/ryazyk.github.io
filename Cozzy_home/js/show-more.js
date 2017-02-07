$(document).ready(function() {
	$(".box7 .see-more-btn").click(function(){
		$(".box7").animate({'height':'890px'}, 700);
		$(".see-more-btn").delay(300).fadeOut(200);
	});

	var slideShow = setInterval(function(){
		$(".box7 .see-more-btn").animate({'top':'180px'}, 700).animate({'top':'190px'}, 700);
	},1400);
})