$(document).ready(function(){


	$(".navbar-nav li").on('click', function(){

		$(".navbar-nav li").removeClass('active');

		$(this).addClass('active');

	});


});