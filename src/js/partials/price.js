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

	$('.price__tab').click(function () {
		if (!$(this).hasClass('price__tab--active')) {
			$(this).parent().find('.price__tab--active').removeClass('price__tab--active');
			$(this).addClass('price__tab--active');
			$(this).parent().siblings('.price__tab-content-wrapper').children().hide().eq($(this).index()).fadeIn(300);
		}
	});

	function rotateArrow(e) {
		e.children('svg').toggleClass('price__accordion-title--rotate');
	}
});