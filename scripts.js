
window.onscroll = function() {navAndAnimations()};

// Get sticky navigation section
var stickyNav = document.getElementById("stickyNavigation");
// Get about section
var about = document.getElementById("about");
// Get the offset position of the About section
var sticky = about.offsetTop -10;

//variables of div containing elements with animation. 
var skillsList1Location = (document.getElementById("skills1")).offsetTop;
var skillsList2Location = (document.getElementById("skills2")).offsetTop;


// YOU ARE HERE: you were changes id's to classes. Can this bemore compact?
// To do: put github link to index page
// compress everything
// check that everything is working once it's all compiled
// SPELL checkPut it thorugh those HTML checkers. 
// Go through html check list
// Go through all the green notes

var projectTilseSet1Location = (document.getElementsByClassName("js-tile-set-1")).offsetTop;

var projectTile1Location = (document.getElementById("projectTrigger1")).offsetTop;
var projectTile2Location = (document.getElementById("projectTrigger2")).offsetTop;
var projectTile3Location = (document.getElementById("projectTrigger3")).offsetTop;
var contactLocation = (document.getElementById("contactTriggerTitle")).offsetTop;


function navAndAnimations() {

  // ----- STICKY NAVIGATION ----- //
  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset > sticky) {
    stickyNav.classList.add("sticky");
    //Check ES9 compatiblitiy fix on W3schools (how TO add a class)****
  } else {
    stickyNav.classList.remove("sticky");
  }


  //There has to be a more efficient way to do this. This is not very DRY :|
  // ----- ANIMATIONS ----- //
  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  //Skills list 1 animation - Work
  var skillsList1Trigger = skillsList1Location - height*0.6;
  if (window.pageYOffset > skillsList1Trigger) {
    skills1.classList.add("animated","fadeInUp");
    skills1.classList.remove("animation-preset");
  }
  //Skills list 2 animation - FCC Certifications
  var skillsList2Trigger = skillsList2Location - height*0.6;
  if (window.pageYOffset > skillsList2Trigger) {
    skills2.classList.add("animated","fadeInUp");
    skills2.classList.remove("animation-preset");
  }

  // PROJECT - All tiles in "Work" - CodeWars, Udemy
  var projectTile1Trigger = projectTile1Location - height*0.8;
  if (window.pageYOffset > projectTile1Trigger) {
    projectTile1.classList.add("animated","zoomIn");
    projectTile1.classList.remove("animation-preset");
    projectTile2.classList.add("animated","zoomIn");
    projectTile2.classList.remove("animation-preset");
    projectTile3.classList.add("animated","zoomIn");
    projectTile3.classList.remove("animation-preset");
  }

  // PROJECT - FCC Tiles in "Certification Projects"
  var projectTile2Trigger = projectTile2Location - height*0.9;
  if (window.pageYOffset > projectTile2Trigger) {
    projectTileA.classList.add("animated","zoomIn");
    projectTileA.classList.remove("animation-preset");
  }

  // PROJECT -  Tile after FCC in "Certification Projects"
  var projectTile3Trigger = projectTile3Location - height*0.9;
  if (window.pageYOffset > projectTile3Trigger) {
    projectTileB.classList.add("animated","zoomIn");
    projectTileB.classList.remove("animation-preset");
    projectTileC.classList.add("animated","zoomIn");
    projectTileC.classList.remove("animation-preset");
  }

  // CONTACT
  var contactTrigger = contactLocation - height*0.8;
  if (window.pageYOffset > contactTrigger) {
    contactTriggerTitle.classList.add("animated","flipInY");
    contactTriggerTitle.classList.remove("animation-preset");
  } else {
    contactTriggerTitle.classList.remove("animated","flipInY");
  }
}

// ----- CLICK EVENT LISTENER ----- //
// To close navigation box once a location is clicked, for mobile. 
// Thank you Chris Ferdanandi for the following tutorial: https://gomakethings.com/listening-for-click-events-with-vanilla-javascript/ 
document.addEventListener('click', function (event) {
	// If the clicked elmeent is one of the nav elements, set checkbox to false. 
	if (event.target.matches('#nav-About') || event.target.matches('#nav-Skills') || event.target.matches('#nav-Projects') || event.target.matches('#nav-Contact') ) {
    document.getElementById("nav-toggle").checked = false;
  };
  // Otherwise, bail. 
  return;
}, false);