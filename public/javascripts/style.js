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

	$(document).on("click", "#btn_more", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: $("#div_spirit").offset().top - 50

		}, 500);

	});

	$(document).on("click", "#btn_apply", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: $("#div_apply").offset().top - 50

		}, 500);

	});

	$(document).on("click", "#footer1 #link_menu a", function(e){

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		if ( $(this).attr('id') != 'procedure' ) {

			var offset = $("#div_" + $(this).attr('id').substr(2)).offset().top - 70;

			$("html, body").animate({

				scrollTop: offset

			}, 500);

		}



	});


	$(function(){

		$(document).on("click", ".nav.navbar-nav li", function(e){

			// Prevent a page reload when a link is pressed
			e.preventDefault(); 

			if ( $(this).attr('id') != 'procedure' ) {

				var offset = $("#div_" + $(this).attr('id')).offset().top - 70;

				$("html, body").animate({

					scrollTop: offset

				}, 500);

			}



		});

	});

	$(".circle").hover(function(){

	    	$(this).stop(true, false).animate({ 
	    		'background-color': '#CCCCCC',
	    		'border-color': '#4D4D4D',
	    		'color': 'black'
	    	}, 300);

	    	$(this).find('.des').stop(true, false).animate({ 
	    		'opacity': '1'
	    	}, 300);

		}, function() {

		    $(this).stop(true, false).animate({ 
		    	'background-color': '#F8F7F7',
		    	'border-color': '#CCCCCC',
	    		'color': '#4D4D4D'
		    }, 300);

	    	$(this).find('.des').stop(true, false).animate({ 
	    		'opacity': '0'
	    	}, 300);
	});

});

$(window).scroll(function(){

	alignNavbar($(document).scrollTop());

	console.log("WIN SCROLL DETECT " + $(document).scrollTop());

});

function scrollApply() {

}


function alignNavbar(scroll) {

	scroll = Math.max(0, (Math.min(150, scroll - 730 + 200)));

	$('#img_logo').css('width', (75 - scroll/6) + '%');

	var h = parseInt($('#img_logo').css('height'))/2 - 10;

	$('.navbar-nav > li > a').css({
		'padding-top': h + 'px',
		'padding-bottom': h + 'px',
	});

	$('.btn.rec_btn.s').css('margin-top', (40 - scroll/7) + 'px');

}


