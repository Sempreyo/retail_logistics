$(document).ready(function () {
	anchorScroll($('.first-screen__scroll-down'));

	function anchorScroll(e) {
		e.click(function () {
			link = $(this).attr('href');
			to = $(link).offset().top;
			$('body, html').animate({scrollTop: to}, 800);
		})
	}
});