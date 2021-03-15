var menuOpen = false;
function toggleMenu(x) {
  x.classList.toggle("change");
  menuOpen = !menuOpen;
  
  if (menuOpen) {
      openNav();
  } else {
      closeNav();
  }
}

function openNav() {
    document.getElementById("menu").style.width = "33%";
}

function closeNav() {
    document.getElementById("menu").style.width = "0%";
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header")[0].style.height = "8vmax";
  } else {
    document.getElementsByTagName("header")[0].style.height = "12vmax";
  }
}