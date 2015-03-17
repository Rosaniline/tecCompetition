$(document).ready(function(){


	$(".navbar-nav li").on('click', function(){

		$(".navbar-nav li").removeClass('active');

		$(this).addClass('active');

	});

	$(window).scroll(function(){

		if ( $(document).scrollTop() > 150 ) {

			console.log($('#img_logo').css('width'));	

			$('#img_logo').css('width', '50%');

			$('.navbar-nav > li > a').css({
				'padding-top': '25px',
				'padding-bottom': '25px',
				'padding-right': '30px'
			});
		}


		else {

			$('#img_logo').css('width', '80%');	
		}

		

	});


});