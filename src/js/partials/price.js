$(document).ready(function () {
	$('.price__accordion-title').each(function () {
		$(this).click(function () {
			$(this).siblings('.price__accordion-content').slideToggle(300);
			rotateArrow($(this));
		})
	});

	$('.price__more').each(function () {
		$(this).click(function () {
			$(this).siblings('.price__description-text').toggleClass('price__description-text--show');
			rotateArrow($(this));
		})
	});

	function rotateArrow(e) {
		e.children('svg').toggleClass('price__accordion-title--rotate');
	}
});