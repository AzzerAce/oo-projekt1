/* global $ */

function onLoadLogo() {
  
  window.onscroll = function() {
      scrollFunc();
  };
      
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  var sidebar = document.getElementById("sidebar-wrapper");
  var sidesticky = sidebar.offsetTop;
  
  var navbar_logo = document.getElementById("small-logo-img");
  console.log(sticky);
  console.log(sidesticky);
  
  function scrollFunc() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("navbar-fixed-top");
      navbar_logo.classList.add("show-logo");
      navbar_logo.classList.remove("hide-logo");
      document.getElementById("page-content-wrapper").style.paddingTop = "70px";
    } else {
      navbar.classList.remove("navbar-fixed-top");
      navbar_logo.classList.remove("show-logo");
      navbar_logo.classList.add("hide-logo");
      document.getElementById("page-content-wrapper").style.paddingTop = "20px";
    }
    
    if (window.pageYOffset >= sticky) {
      sidebar.style.top = (sidesticky - sticky).toString() + "px";
    } else {
      sidebar.style.top = (sidesticky - window.pageYOffset).toString() + "px";
    }
  }
}

$(function () {

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  $("#menu-toggle").toggleClass("toggled");
  $("#menu-toggle").find(".glyphicon").toggleClass("glyphicon-menu-right").toggleClass("glyphicon-menu-left");
});

});