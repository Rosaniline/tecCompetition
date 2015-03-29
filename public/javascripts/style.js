$(document).ready(function(){

	alignNavbar();


	$(".navbar-nav li").on('click', function(){

		$(".navbar-nav li").removeClass('active');

		$(this).addClass('active');

	});

	$("#img_logo").css({
		"cursor": "pointer"
	})

	$('.banner_slider').bxSlider({
		slideWidth: window.width,
		minSlides: 1,
		maxSlides: 1,
		slideMargin: 0,
		infiniteLoop: true,
		adaptiveHeight: true,
		auto: true,
		pager: false,
		pause: 3000,
		keyboardEnabled: true
	});

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

	$(".circle").hover(function(){

	    	$(this).stop(true, false).animate({ 
	    		'background-color': 'white',
	    		'border-color': '#EB623F',
	    		'color': '#EB623F'
	    	}, 300);

	    	$(this).find('.des').stop(true, false).animate({ 
	    		'opacity': '1',
	    		'color': '#4D4D4D'
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

    $('.btn-file').on('change', function(event, numFiles, label) {


    	var elem = document.getElementById("file_text");
    	elem.value = "";
    	var fileName = $("input:file").val().split('/').pop().split('\\').pop();
    	
		elem.value = fileName;
        
    });

	$('#ss-submit').on('click', function(event) {

		if ( document.getElementById("file_text").value == "" ) {
			alert("請上傳報名表格！");
		}

		else {
			$('#uploadForm').ajaxSubmit({

	            error: function(xhr) {
					status('Error: ' + xhr.status);
	            },

	            success: function(response) {
					console.log(response);
					$(this).css('display', 'none');
	            }
	        });

			$('#ss-form').ajaxSubmit({
				url: $(this).attr("action"),
				type: 'POST',
				data: $(this).serialize(),
				beforeSend: function() {
					$("#message").html("sending...");
				},
				success: function(data) {
					$("#message").hide();
					$("#response").html(data);
				}
			});

			$('#apply_ing').css('display', 'none');
			$('#apply_done').css('display', 'block');
		}

	    return false;

	});


});


$(window).scroll(function(){

	alignNavbar($(document).scrollTop());

});

function alignNavbar(scroll) {

	scroll = Math.max(0, (Math.min(150, scroll - 730 + 200)));

	// console.log();

	$('#img_logo').css('width', (75 - scroll/6) + '%');

	var h = parseInt($('#img_logo').css('height'))/2 - 10;

	$('.navbar-nav > li > a').css({
		'padding-top': h + 'px',
		'padding-bottom': h + 'px',
	});

	$('.btn.rec_btn.s').css('margin-top', (40 - scroll/7) + 'px');


	$('.bx-wrapper .bx-prev').css('opacity', Math.max( ($(window).height()/2 - $(document).scrollTop()*2)/$(window).height(), 0));

	$('.bx-wrapper .bx-next').css('opacity', Math.max( ($(window).height()/2 - $(document).scrollTop()*2)/$(window).height(), 0));

}


