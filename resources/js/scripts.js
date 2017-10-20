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

//    Scrolling Animations
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });

    
//    PROJETS
    $('.js-wp-InLeft').waypoint(function(direction) {
        $('.js-wp-InLeft').addClass('animated fadeInLeft');
    }, {
        offset: '60%'
    });
    $('.js-wp-InRight').waypoint(function(direction) {
        $('.js-wp-InRight').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    $('.js-wp-InUp').waypoint(function(direction) {
        $('.js-wp-InUp').addClass('animated fadeInUp');
    }, {
        offset: '70%'
    });
    $('.js-wp-InDown').waypoint(function(direction) {
        $('.js-wp-InDown').addClass('animated fadeInDown');
    }, {
        offset: '60%'
    });
    
    
    
    $('.js-wp-zoom').waypoint(function(direction) {
        $('.js-wp-zoom').addClass('animated zoomIn');
    }, {
        offset: '60%'
    });
    
});

