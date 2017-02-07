$(document).ready(function() {
	var d = new Date();
	var curr_date = d.getDate();
	var curr_month = d.getMonth() + 1;
	var curr_year = d.getFullYear();
	
	$('.timer').countdown(curr_year + "/" + curr_month + "/30 00:00:00", function(event) {
		$(this).html(event.strftime(''
		+ '<div><span>%D</span><br> Day </div>'
		+ '<div><span>%H</span><br> Hour </div>'
		+ '<div><span>%M</span><br> Min </div>'
		+ '<div><span>%S</span><br> Sec </div>'));
	});

$(".grid12 > .cap").remove();
})