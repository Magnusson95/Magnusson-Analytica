// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the header
var header = document.getElementById("primaryHeader");
var newheader = document.getElementById("secondaryHeader");
var oldhamburger = document.getElementById("primaryHamburger");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    newheader.classList.remove("remove");
    oldhamburger.classList.add("remove");
  } else {
    header.classList.remove("remove");
    newheader.classList.add("remove");
    oldhamburger.classList.remove("remove");
  }
}
