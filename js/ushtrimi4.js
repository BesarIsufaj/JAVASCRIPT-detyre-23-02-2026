let input4 = document.getElementById("numer4");
let p = document.getElementById("paragraf4");

function check() {
  console.log("enter function");
  let mesazhi = "";
  let numer = input4.valueAsNumber;
  if (numer % 2 == 0) {
    mesazhi = "Numri " + numer + " është ÇIFT";
  } else {
    mesazhi = "Numri " + numer + " është TEK";
  }
  p.textContent = mesazhi;
}

input4.addEventListener("input", check);
