(function($){

	$.fn.fullNav = function(options) {

		var settings = {
			background: 'rgba(52, 152, 219,1)',
			color: 'white',
			linkPadding: '10px',
			fontSize: '3em',
			linkBackground: 'transparent',
			fontFamily: 'Helvetica',
			hoverColor: 'rgb(196, 196, 196)',
			fade: true,
			closeContent: 'X'
		};

		$.extend( settings, options );
		var overlay = $('<div/>', {
		    class: 'fullNavOverlay'
		});
		var close = $('<div/>', {
			class: 'fullNavOverlayCloseBtn',
			html: settings.closeContent
		});

		// prepend to the body
		overlay.prependTo('body');

		// move this' html to overlay's html
		overlay.html(this.html());

		// Remove the template
		this.remove();

		overlay.prepend(close);

		// styling up
		$('.fullNavOverlay').css({
			position: 'fixed',
			top: 0,
			left: 0,
			minHeight: '100%',
			width: '100%',
			background: settings.background,
			display: 'none',
			overflow: 'auto',
		});


		$('.fullNavOverlay ul').css({
			listStyle: 'none',
			padding: 0,
			marginTop: '130px'
		});

		$('.fullNavOverlay ul li').css({

		});

		$('.fullNavOverlay ul li a').css({
			display: 'block',
			color: settings.color,
			padding: settings.linkPadding,
			textAlign: 'center',
			fontSize: settings.fontSize,
			fontFamily: settings.fontFamily,
			textDecoration: 'none'
		});

		$('.fullNavOverlay ul li a').hover(function(){
			$(this).css('color', settings.hoverColor);
		}, function(){
			$(this).css('color', settings.color);
		});

		// Close Button
		$('.fullNavOverlay .fullNavOverlayCloseBtn').css({
			fontFamily: settings.fontFamily,
			float: 'right',
			top: '50px',
			right: '50px',
			color: settings.color,
			cursor: 'pointer',
			fontSize: '3em',
			clear: 'both',
			position: 'absolute'
		});

		$('.fullNavOverlay .fullNavOverlayCloseBtn').click(function() {
			if ( settings.fade ) {
				$(this).parent('.fullNavOverlay').fadeOut();
			} else {
				$(this).parent('.fullNavOverlay').hide();
			}
		});

		// Listen for data-showfullnav
		$('*[data-showfullnav]').each(function(){
			$(this).on('click', function(e) {
				e.preventDefault();
				if (settings.fade) {
					overlay.fadeIn();
				} else {
					overlay.show();
				}
			});
		});

	};

})(jQuery);
