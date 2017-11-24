/**
 * skip-link-focus-fix.js
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://github.com/Automattic/_s/pull/136
 */
(function () {
	var isWebkit = navigator.userAgent.toLowerCase().indexOf('webkit') > -1,
		isOpera = navigator.userAgent.toLowerCase().indexOf('opera') > -1,
		isIE = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

	if ((isWebkit || isOpera || isIE) && document.getElementById && window.addEventListener) {
		window.addEventListener('hashchange', function () {
			var id = location.hash.substring(1),
				element;

			if (!(/^[A-z0-9_-]+$/.test(id))) {
				return;
			}

			element = document.getElementById(id);

			if (element) {
				if (!(/^(?:a|select|input|button|textarea)$/i.test(element.tagName))) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false);
	}
})();



jQuery( function( $ ) {
  $( '#new-quote-button' ).on( 'click', function ( e ) {
    e.preventDefault();
    $.ajax( {
      url: '/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function ( data ) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $( '#quote-title' ).text( post.title );
        $( '#quote-content' ).html( post.content );

        // If the Source is available, use it. Otherwise hide it.
        if ( typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined' ) {
          $( '#quote-source' ).html( 'Source:' + post.custom_meta.Source );
        } else {
          $( '#quote-source' ).text( '' );
        }
      },
      cache: false
    } );
  } );
} );