$(document).ready(function () {
	$('.commercial__tab').click(function () {
		$(this).parent().find('.commercial__tab--active').removeClass('commercial__tab--active');
		$(this).addClass('commercial__tab--active');
		$('.commercial__content-item').hide().eq($(this).index()).fadeIn(300);
	});
});