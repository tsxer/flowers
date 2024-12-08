// Čakanie, kým sa celý DOM načíta
document.addEventListener("DOMContentLoaded", function () {
  // Získavanie všetkých prvkov s triedou 'faq__accordion'
  const accordion = document.getElementsByClassName("faq__accordion");

  // Iterácia cez všetky získané prvky
  for (let a of accordion) {
    // Pridanie udalosti kliknutia na každý prvok
    a.addEventListener("click", function () {
      // Prevod stavu aktivity (toggle) pre kliknutý element
      this.classList.toggle("active");
    });
  }
});
