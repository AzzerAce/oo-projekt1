$(function () {

window.onscroll = function() {
    myFunction();
};
    
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
console.log(sticky);

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("navbar-fixed-top");
  } else {
    navbar.classList.remove("navbar-fixed-top");
  }
}

});