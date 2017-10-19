$(document).ready(function() {

//    Page Fade In
    $('body').removeClass('fade-out');
    
//    Sticky Navigation
    $('.js-aboutme').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        };

    });
    
//    Scrolling Navigation
    $('.js-scroll-to-aboutme').click(function () {
        $('html, body').animate({scrollTop: $('#aboutme').offset().top}, 500);
    });
    $('.js-scroll-to-projects').click(function () {
        $('html, body').animate({scrollTop: $('#projects').offset().top}, 500);
    });
    $('.js-scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('#contactform').offset().top}, 500);
    });

    
    
});

