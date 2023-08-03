

// smooth scroll
$(document).ready(function () {
	$(".nav-link").on('click', function (event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function () {
				window.location.hash = hash;
			});
		}
	});
});

$(document).ready(function () {
	$(".down-animation").on('click', function (event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function () {
				window.location.hash = hash;
			});
		}
	});
});

$(document).ready(function () {
	$(".counter").each(function () {
		var $this = $(this);
		$({ Counter: 0 }).animate(
			{ Counter: $this.data("to") },
			{
				duration: $this.data("speed"),
				easing: "swing",
				step: function () {
					$this.text(Math.ceil(this.Counter));
				},
			}
		);
	});
});