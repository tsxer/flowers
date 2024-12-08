// Vyberáme všetky prvky s triedou "alert-button"
var buttons = document.querySelectorAll(".content__button");

// Prechádzame cez každé tlačidlo a pridávame naň správcovské udalosti
buttons.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // Zobrazenie upozornenia pri kliknutí na tlačidlo
    alert("Klikli ste na tlačidlo č. " + (index + 1));
  });
});
