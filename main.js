$(function () {

window.onscroll = function() {
    myFunction();
};
    
var navbar = document.getElementById("navbar");
var navbar_logo = document.getElementById("small-logo-img");
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-fixed-top");
    navbar_logo.classList.add("show-logo");
    navbar_logo.classList.remove("hide-logo");
  } else {
    navbar.classList.remove("navbar-fixed-top");
    navbar_logo.classList.remove("show-logo");
    navbar_logo.classList.add("hide-logo");
  }
}

});