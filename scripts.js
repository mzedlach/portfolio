window.onscroll = function () {
  navAndAnimations();
};

// Get sticky navigation section
var stickyNav = document.getElementById('stickyNavigation');
// Get about section
var about = document.getElementById('about');
// Get the offset position of the About section
var sticky = about.offsetTop - 10;

function navAndAnimations() {
  // ----- STICKY NAVIGATION ----- //
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    stickyNav.classList.add('sticky');
    //Check ES9 compatiblitiy fix on W3schools (how TO add a class)****
  } else {
    stickyNav.classList.remove('sticky');
  }

// ----- CLICK EVENT LISTENER ----- //
// To close navigation box once a location is clicked, for mobile.
// Thank you Chris Ferdanandi for the following tutorial: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/
document.addEventListener(
  'click',
  function (event) {
    // If the clicked elmeent is one of the nav elements, set checkbox to false.
    if (
      event.target.matches('#nav-About') ||
      event.target.matches('#nav-Skills') ||
      event.target.matches('#nav-Projects') ||
      event.target.matches('#nav-Contact')
    ) {
      document.getElementById('nav-toggle').checked = false;
    }
    // Otherwise, bail.
    return;
  },
  false
);
