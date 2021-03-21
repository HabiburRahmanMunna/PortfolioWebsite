$(document).ready(function($){
	"use strict";

	// WOW Js Active
	new WOW().init();

	// ---- Active
    $(".owl").owlCarousel();
    // Owl Next Privew Change
    //$( ".owl-prev").html('<i class="fa screenshort-arow fa-chevron-left"></i>');
    //$( ".owl-next").html('<i class="fa screenshort-arow fa-chevron-right"></i>');
    //=====================team 
    $('.owl-carousel-team').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    //testimonial 
    $('.owl-carousel-testimonial').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        items: 1,
    })
    
    //magnific popup for video section of hrittk

    /* https://www.youtube.com/watch?v=-RuSqMYcQK0  */

    $('#youtube-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src',
        }
    });


    $('.skillbar').skillBars({
        // options here
    });

    /* coad of counter number effect */
    $('.counter-number').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 4000,
            easing: 'swing', 
            step: function(now) {
                $(this).text(Math.ceil(now));                
            }
        });
    });

    /* mixitup coad active */
    var mixer = mixitup('.portfolio-content');
    
    /* for portfolio magnefic popup */
    $('.image-link').magnificPopup({ type: 'image'});

    /* for menu scroll */
    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });


}(jQuery));