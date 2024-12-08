// Vyberáme prvok s ID "hamburger"
var hamburger = document.getElementById("hamburger");

// Funkcia na prepnutie triedy "responsive" v navigačnom menu
function myNav() {
  var menu = document.querySelector(".header__nav-list"); // Vyberáme navigačné menu
  menu.classList.toggle("responsive"); // Prepíname triedu "responsive"
}

// Pridávame poslucháča udalostí na kliknutie na hamburger ikonu
hamburger.addEventListener("click", myNav);
