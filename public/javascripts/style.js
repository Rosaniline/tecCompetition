$(document).ready(function(){

	alignNavbar();


	$(".navbar-nav li").on('click', function(){

		$(".navbar-nav li").removeClass('active');

		$(this).addClass('active');

	});

	$("#img_logo").css({
		"cursor": "pointer"
	})

	
	$(document).on("click", "#img_logo", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: 0

		}, 500);

	});


	$(function(){

		$(document).on("click", ".nav.navbar-nav li", function(e){

			// Prevent a page reload when a link is pressed
			e.preventDefault(); 

			var offset = $("#div_" + $(this).attr('id')).offset().top - 50;

			$("html, body").animate({

				scrollTop: offset

			}, 500);

		});

	});


});

$(window).scroll(function(){

	alignNavbar($(document).scrollTop());

	console.log("WIN SCROLL DETECT " + $(document).scrollTop());

});


function alignNavbar(scroll) {

	scroll = Math.max(0, (Math.min(150, scroll - 730 + 200)));

	$('#img_logo').css('width', (80 - scroll/5) + '%');

	var h = parseInt($('#img_logo').css('height'))/2 - 10;

	$('.navbar-nav > li > a').css({
		'padding-top': h + 'px',
		'padding-bottom': h + 'px',
	});

	$('.btn.rec_btn.s').css('margin-top', (40 - scroll/7) + 'px');

}