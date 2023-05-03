(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        // Magnific Popup:
        $(".video-play-button").magnificPopup({
        	type: 'video'
        });

        // Counter:
        $('.counter').counterUp({
            delay: 100,
            time: 5000,
        });

        // SmoothScroll:
        $("a").smoothScroll();
    });

    jQuery(window).load(function(){

    });

}(jQuery));	