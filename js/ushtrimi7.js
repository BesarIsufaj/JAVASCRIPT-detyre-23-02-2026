let input7 = document.getElementById("psw7");
let mesazh = document.getElementById("mesazh7");

input7.addEventListener("input", function () {
  if (input7.value.length < 6) {
    mesazh.textContent = "Fjalëkalimi është shumë i shkurtër";
    mesazh.style.color = "red";
  } else {
    mesazh.textContent = "Fjalëkalim i vlefshëm";
    mesazh.style.color = "green";
  }
});
