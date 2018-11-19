// $(document).ready(function() {
    



// // document.getElementById("p2").style.color = "blue"



// //    Sticky Navigation
//     // $('.js-aboutme').waypoint(function(direction) {
//     //     if (direction == 'down') {
//     //         $('nav').addClass('sticky');
//     //     } else {
//     //         $('nav').removeClass('sticky');
//     //     };

//     // });
    



// //    Scrolling Navigation
//     $('.js-scroll-to-aboutme').click(function () {
//         $('html, body').animate({scrollTop: $('#aboutme').offset().top}, 500);
//     });
//     $('.js-scroll-to-projects').click(function () {
//         $('html, body').animate({scrollTop: $('#projects').offset().top}, 500);
//     });
//     $('.js-scroll-to-contact').click(function () {
//         $('html, body').animate({scrollTop: $('#contactform').offset().top}, 500);
//     });

// //    Scrolling Animations
//     $('.js-wp-1').waypoint(function(direction) {
//         $('.js-wp-1').addClass('animated fadeInUp');
//     }, {
//         offset: '70%'
//     });

    
// //    PROJETS
//     $('.js-wp-InLeft').waypoint(function(direction) {
//         $('.js-wp-InLeft').addClass('animated fadeInLeft');
//     }, {
//         offset: '60%'
//     });
//     $('.js-wp-InRight').waypoint(function(direction) {
//         $('.js-wp-InRight').addClass('animated fadeInRight');
//     }, {
//         offset: '60%'
//     });
//     $('.js-wp-InUp').waypoint(function(direction) {
//         $('.js-wp-InUp').addClass('animated fadeInUp');
//     }, {
//         offset: '70%'
//     });
//     $('.js-wp-InDown').waypoint(function(direction) {
//         $('.js-wp-InDown').addClass('animated fadeInDown');
//     }, {
//         offset: '60%'
//     });
    
    
    
//     $('.js-wp-zoom').waypoint(function(direction) {
//         $('.js-wp-zoom').addClass('animated zoomIn');
//     }, {
//         offset: '60%'
//     });
    
// //    Mobile Navigation - Open/Close Nav
//     $('.js-nav-icon').click(function() {
//         var nav = $('.nav-links');
//         var icon = $('.js-nav-icon i');
        
//         nav.slideToggle(200);
//         if (icon.hasClass('fa-navicon')) {
//             icon.addClass('fa-close');
//             icon.removeClass('fa-navicon');
//         } else {
//             icon.addClass('fa-navicon');
//             icon.removeClass('fa-close');
//         };
        
//     });
    
// });


window.onscroll = function() {stickyNavigation()};
    console.log("Function working");
// Get sticky navigation section
var stickyNav = document.getElementById("stickyNavigation");
// Get about section
var about = document.getElementById("about");
// Get the offset position of the About section
var sticky = about.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNavigation() {
  if (window.pageYOffset > sticky) {
    stickyNav.style.display = "flex";
  } else {
    stickyNav.style.display = "none";
  }
}