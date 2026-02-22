let numri = 0;

function reset() {
  numri = 0;
  let spanNumri = document.getElementById("numri3");
  spanNumri.textContent = numri;
}

function rritMe1() {
  numri++;
  let spanNumri = document.getElementById("numri3");
  spanNumri.textContent = numri;
}
