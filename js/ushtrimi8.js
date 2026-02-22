function gjejMax() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);
  let n3 = parseFloat(document.getElementById("num3").value);

  let maxNum = Math.max(n1, n2, n3); 

  let rezultati = document.getElementById("rezultati");

  if (n1 === maxNum && n1 >= n2 && n1 >= n3) {
    rezultati.textContent = `Numri më i madh është ${maxNum} (Numri 1)`;
  } else if (n2 === maxNum && n2 >= n1 && n2 >= n3) {
    rezultati.textContent = `Numri më i madh është ${maxNum} (Numri 2)`;
  } else {
    rezultati.textContent = `Numri më i madh është ${maxNum} (Numri 3)`;
  }
}
