$(function() {

	// setTimeout(function() {
	// 	$(".preloader_overlay").fadeOut();
	// }, 3000);

	$(".preloader_overlay").fadeOut();

	$(".mobile-menu").click(function() {
		var menu = $(this).find(".toggle-mnu");
		menu.toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});


	$('ul.sf-menu').superfish({
		hoverClass: "no-class",
		delay: 400
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
