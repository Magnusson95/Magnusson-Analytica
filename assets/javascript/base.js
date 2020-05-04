$(".header__hamburger").click(function () {
  $(".header__links").toggle("slow");
});

$(".callback").click(function () {
  $(".callback-form").toggle("slow");
});

$("#subscribe").click(function () {
  $(".subscribe-form").toggle("slow");
});

$(".close").click(function () {
  $(".callback-form").toggle("slow");
  $(".subscribe-form").toggle("slow");
});

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

$(".my-software__details__back").click(function () {
  $(".my-software__details")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut")
    .removeClass("top");
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn");
});

$("#tableau-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#tableau-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#power-bi-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#power-bi-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#html-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#html-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#css-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#css-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#javascript-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#javascript-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#jQuery-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#jQuery-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#vs-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#vs-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#sql-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#sql-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#excel-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#excel-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#access-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#access-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#alteryx-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#alteryx-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#sap-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#sap-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#scrum-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#scrum-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});

$("#jira-logo").click(function () {
  $(".my-software__collage__container")
    .removeClass("animated")
    .removeClass("fadeIn")
    .addClass("animated")
    .addClass("fadeOut");
  $("#jira-details")
    .removeClass("animated")
    .removeClass("fadeOut")
    .addClass("animated")
    .addClass("fadeIn")
    .addClass("top");
});
