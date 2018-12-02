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


window.onscroll = function() {navAndAnimations()};


// Get sticky navigation section
var stickyNav = document.getElementById("stickyNavigation");
// Get about section
var about = document.getElementById("about");
// Get the offset position of the About section
var sticky = about.offsetTop;





//variables of div containing elements with animation. 
var skillsList1Location = (document.getElementById("skills1")).offsetTop;
var skillsList2Location = (document.getElementById("skills2")).offsetTop;
var projectTile1Location = (document.getElementById("project1")).offsetTop;


// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function navAndAnimations() {

  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  var halfway = height * 0.8;


  if (window.pageYOffset > sticky) {
    stickyNav.classList.add("sticky");
    //Check ES9 compatiblitiy fix on W3schools (how TO add a class)
  } else {
    stickyNav.classList.remove("sticky");
  }


  //There has to be a more efficient way to do this. This is not very DRY :|
  //Skills list 1 animation
  var skillsList1Trigger = skillsList1Location - halfway;
  if (window.pageYOffset > skillsList1Trigger) {
    skills1.classList.add("animated","fadeInUp");
  } else {
    skills1.classList.remove("animated","fadeInUp");
  }

  //Skills list 2 animation
  var skillsList2Trigger = skillsList2Location - halfway;
  if (window.pageYOffset > skillsList2Trigger) {
    skills2.classList.add("animated","fadeInUp");
  } else {
    skills2.classList.remove("animated","fadeInUp");
  }

  // .style.display = "none";

  // Project tile 1 animation
  var projectTile1Trigger = projectTile1Location - halfway;
  if (window.pageYOffset > projectTile1Trigger) {
    project1.classList.add("animated","zoomIn");
  } else {
    project1.classList.remove("animated","zoomIn");
  }

  // Project tile 2+3 animation
  var projectTile1Trigger = projectTile1Location - halfway;
  if (window.pageYOffset > projectTile1Trigger) {
    project1.classList.add("animated","zoomIn");
  } else {
    project1.classList.remove("animated","zoomIn");
  }

}
