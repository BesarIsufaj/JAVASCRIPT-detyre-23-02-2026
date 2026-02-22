let div = document.getElementById("numrat");
function gjenero() {
  for (let numri = 1; numri <= 10; numri++) {
    console.log(numri);
    let p = document.createElement("p");
    p.textContent = numri;
    div.appendChild(p);
  }
}
