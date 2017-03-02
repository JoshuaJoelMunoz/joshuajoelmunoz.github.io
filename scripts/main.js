/*
	Highlights by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		large: '(max-width: 1680px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$html = $('html');

		// Disable animations/transitions until the page has loaded.
			$html.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$html.removeClass('is-loading');
				}, 0);
			});

		// Touch mode.
			if (skel.vars.mobile) {

				var $wrapper;

				// Create wrapper.
					$body.wrapInner('<div id="wrapper" />');
					$wrapper = $('#wrapper');

					// Hack: iOS vh bug.
						if (skel.vars.os == 'ios')
							$wrapper
								.css('margin-top', -25)
								.css('padding-bottom', 25);

					// Pass scroll event to window.
						$wrapper.on('scroll', function() {
							$window.trigger('scroll');
						});

				// Scrolly.
					$window.on('load.hl_scrolly', function() {

						$('.scrolly').scrolly({
							speed: 1500,
							parent: $wrapper,
							pollOnce: true
						});

						$window.off('load.hl_scrolly');

					});

				// Enable touch mode.
					$html.addClass('is-touch');

			}
			else {

				// Scrolly.
					$('.scrolly').scrolly({
						speed: 1500
					});

			}

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var $header = $('#header'),
				$headerTitle = $header.find('header'),
				$headerContainer = $header.find('.container');

			// Make title fixed.
				if (!skel.vars.mobile) {

					$window.on('load.hl_headerTitle', function() {

						skel.on('-medium !medium', function() {

							$headerTitle
								.css('position', 'fixed')
								.css('height', 'auto')
								.css('top', '50%')
								.css('left', '0')
								.css('width', '100%')
								.css('margin-top', ($headerTitle.outerHeight() / -2));

						});

						skel.on('+medium', function() {

							$headerTitle
								.css('position', '')
								.css('height', '')
								.css('top', '')
								.css('left', '')
								.css('width', '')
								.css('margin-top', '');

						});

						$window.off('load.hl_headerTitle');

					});

				}

			// Scrollex.
				skel.on('-small !small', function() {
					$header.scrollex({
						terminate: function() {

							$headerTitle.css('opacity', '');

						},
						scroll: function(progress) {

							// Fade out title as user scrolls down.
								if (progress > 0.5)
									x = 1 - progress;
								else
									x = progress;

								$headerTitle.css('opacity', Math.max(0, Math.min(1, x * 2)));

						}
					});
				});

				skel.on('+small', function() {

					$header.unscrollex();

				});

		// Main sections.
			$('.main').each(function() {

				var $this = $(this),
					$primaryImg = $this.find('.image.primary > img'),
					$bg,
					options;

				// No primary image? Bail.
					if ($primaryImg.length == 0)
						return;

				// Hack: IE8 fallback.
					if (skel.vars.IEVersion < 9) {

						$this
							.css('background-image', 'url("' + $primaryImg.attr('src') + '")')
							.css('-ms-behavior', 'url("css/ie/backgroundsize.min.htc")');

						return;

					}

				// Create bg and append it to body.
					$bg = $('<div class="main-bg" id="' + $this.attr('id') + '-bg"></div>')
						.css('background-image', (
							'url("css/images/overlay.png"), url("' + $primaryImg.attr('src') + '")'
						))
						.appendTo($body);

				// Scrollex.
					options = {
						mode: 'middle',
						delay: 200,
						top: '-10vh',
						bottom: '-10vh'
					};

					if (skel.canUse('transition')) {

						options.init = function() { $bg.removeClass('active'); };
						options.enter = function() { $bg.addClass('active'); };
						options.leave = function() { $bg.removeClass('active'); };

					}
					else {

						$bg
							.css('opacity', 1)
							.hide();

						options.init = function() { $bg.fadeOut(0); };
						options.enter = function() { $bg.fadeIn(400); };
						options.leave = function() { $bg.fadeOut(400); };

					}

					$this.scrollex(options);

			});

	});

})(jQuery);

var gauge1 = loadLiquidFillGauge('fillgauge1', 75);
var config1 = liquidFillGaugeDefaultSettings();
config1.circleColor = '#721c1c';
config1.textColor = '#b9151b';
config1.waveTextColor = '#d81e2c';
config1.waveColor = '#871e1e';
config1.circleThickness = 0.2;
config1.textVertPosition = 0.2;
config1.waveAnimateTime = 2000;
var gauge2= loadLiquidFillGauge('fillgauge2', 85, config2);
var config2 = liquidFillGaugeDefaultSettings();
config2.circleColor = '#721c1c';
config2.textColor = '#b9151b';
config2.waveTextColor = '#d81e2c';
config2.waveColor = '#871e1e';
config2.circleThickness = 0.2;
config2.textVertPosition = 0.2;
config2.waveAnimateTime = 2000;
var gauge3 = loadLiquidFillGauge('fillgauge3', 70, config3);
var config3 = liquidFillGaugeDefaultSettings();
config3.circleColor = '#721c1c';
config3.textColor = '#b9151b';
config3.waveTextColor = '#d81e2c';
config3.waveColor = '#871e1e';
config3.circleThickness = 0.2;
config3.textVertPosition = 0.2;
config3.waveAnimateTime = 2000;
var gauge4 = loadLiquidFillGauge('fillgauge4', 80, config4);
var config4 = liquidFillGaugeDefaultSettings();
config4.circleColor = '#721c1c';
config4.textColor = '#b9151b';
config4.waveTextColor = '#d81e2c';
config4.waveColor = '#871e1e';
config4.circleThickness = 0.2;
config4.textVertPosition = 0.2;
config4.waveAnimateTime = 2000;
var gauge5 = loadLiquidFillGauge('fillgauge5', 75, config5);
var config5 = liquidFillGaugeDefaultSettings();
config5.circleColor = '#721c1c';
config5.textColor = '#b9151b';
config5.waveTextColor = '#d81e2c';
config5.waveColor = '#871e1e';
config5.circleThickness = 0.2;
config5.textVertPosition = 0.2;
config1.waveAnimateTime = 2000;
var gauge6 = loadLiquidFillGauge('fillgauge6', 80, config6);
var config6 = liquidFillGaugeDefaultSettings();
config6.circleColor = '#721c1c';
config6.textColor = '#b9151b';
config6.waveTextColor = '#d81e2c';
config6.waveColor = '#871e1e';
config6.circleThickness = 0.2;
config6.textVertPosition = 0.2;
config6.waveAnimateTime = 2000;

function NewValue(){
		if(Math.random() > .5){
				return Math.round(Math.random()*100);
		} else {
				return (Math.random()*100).toFixed(1);
		}
}
