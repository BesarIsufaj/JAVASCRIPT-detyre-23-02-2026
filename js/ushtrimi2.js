let nr1 = document.getElementById("numer1");
let nr2 = document.getElementById("numer2");
let paragraf = document.getElementById("shuma");

function gjejShumen() {
  let rezultati = isNaN(nr1.valueAsNumber) ? 0 : nr1.valueAsNumber;
  rezultati += isNaN(nr2.valueAsNumber) ? 0 : nr2.valueAsNumber;

  paragraf.textContent = "Shuma është: " + rezultati;
}

function clear() {
  paragraf.textContent = "";
}

nr1.addEventListener("input", clear);
nr2.addEventListener("input", clear);
