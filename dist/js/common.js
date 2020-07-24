(function ($) {
	$(document).ready(function () {

		$('.examples .slider').slick({
			dots: true,
			arrows: true,
			prevArrow: '<button class="icon-left-open"></button>',
			nextArrow: '<button class="icon-right-open"></button>',
			infinite: true,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
		});

		$(document).on('click', '.anchor', function (e) {
			var fixed_offset = 0;
			$('html, body').stop().animate({
				scrollTop: $(this.hash).offset().top - fixed_offset
			}, 500);
			e.preventDefault();
		});

		function basketCounter() {
			var btnMinus = $('.counter .minus');
			var btnPlus = $('.counter .plus');
			var counterField = $('.counter__field');
			$(btnMinus).click(function () {
				var $input = $(this).parent().find(counterField);
				var count = parseInt($input.val()) - 1;
				count = count < 1 ? 1 : count;
				$input.val(count);
				$input.change();
				return false;
			});
			$(btnPlus).click(function () {
				var $input = $(this).parent().find(counterField);
				$input.val(parseInt($input.val()) + 1);
				$input.change();
				return false;
			});
		}
		basketCounter();

		$('.seo-block-line .text-container').hide();
		$('.seo-block__title').on('click', function () {
			$(this).toggleClass('active');
			$(this).next('.text-container').slideToggle();
		});

	});

	setTimeout(function () {
		AOS.init({
			offset: 50,
			delay: 0,
			duration: 1000,
			once: true,
			disable: 'mobile'
		});
	}, 500);

})(jQuery);