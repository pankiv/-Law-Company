$(function() {

	// setTimeout(function() {
	// 	$(".preloader_overlay").fadeOut();
	// }, 3000);


	$(".preloader_overlay").fadeOut();


	$('ul.sf-menu').superfish({
		hoverClass: "no-class",
		delay: 400
	})
	.after("<div id='mob_menu'>").clone().appendTo("#mob_menu");
	$("#mob_menu").children("ul").removeClass("sf-menu");
	$("#mob_menu").find("*").attr("style", "");




	var $menu = $('#mob_menu');
	var $btnMenu = $('.toggle-mnu');

	$menu.mmenu({
		counters: true 
	});

	var api = $menu.data("mmenu");

	$btnMenu.click(function() {
		api.open();
		$(".toggle-mnu").addClass("on");
	});


	api.bind("closed", function () {
		$(".toggle-mnu").removeClass("on");
	});



	var owl = $("#owl-example");

	owl.owlCarousel({
		items: 1,
		loop: true,
		dotsEach: true,
		autoplay: true,
		autoplaySpeed: 1500
	});

	$('.customNextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
// Go to the previous item
$('.customPrevBtn').click(function() {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl.trigger('prev.owl.carousel', [300]);
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
