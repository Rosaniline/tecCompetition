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

			scrollTop: $("#div_news").offset().top - 50

		}, 500);

	});

	$(document).on("click", "#btn_apply", function(e){

		console.log("123");

		// Prevent a page reload when a link is pressed
		e.preventDefault(); 

		$("html, body").animate({

			scrollTop: $("#div_apply").offset().top - 50

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

	$(".circle").hover(function(){

	    	$(this).stop(true, false).animate({ 
	    		'background-color': '#CCCCCC',
	    		'border-color': '#4D4D4D',
	    		'color': 'black'
	    	}, 300);

		}, function() {

		    $(this).stop(true, false).animate({ 
		    	'background-color': '#F8F7F7',
		    	'border-color': '#CCCCCC',
	    		'color': '#4D4D4D'
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

	$('#img_logo').css('width', (80 - scroll/5) + '%');

	var h = parseInt($('#img_logo').css('height'))/2 - 10;

	$('.navbar-nav > li > a').css({
		'padding-top': h + 'px',
		'padding-bottom': h + 'px',
	});

	$('.btn.rec_btn.s').css('margin-top', (40 - scroll/7) + 'px');

}

var pieData = [
				{
					value: 20,
					color:"#F7464A",
					highlight: "#FF5A5E",
					label: "產品創新程度"
				},
				{
					value: 20,
					color: "#46BFBD",
					highlight: "#5AD3D1",
					label: "產品商機"
				},
				{
					value: 20,
					color: "#FDB45C",
					highlight: "#FFC870",
					label: "團隊熱情與分工"
				},
				{
					value: 20,
					color: "#949FB1",
					highlight: "#A8B3C5",
					label: "影響規模"
				},
				{
					value: 20,
					color: "#4D5360",
					highlight: "#616774",
					label: "可行性評估"
				}

			];

// window.onload = function(){
// 	var ctx = document.getElementById("chart-area").getContext("2d");
// 	window.myPie = new Chart(ctx).Pie(pieData, {
// 	    animateScale: true,
// 	    showScale: true
// 	});

// };

