let input = document.getElementById("numri3")
let numri3 = input.valueAsNumber ||0

function vendosVlere(nr){
  numri3=nr;
  input.value = numri3;
}
function rritMe1() {
  numri3++;
  vendosVlere(numri3)
}
