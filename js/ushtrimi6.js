
let itemText = document.getElementById("input6");
let lista = document.getElementById("list6");

function shtoItem() {
  let item = document.createElement('li');
  item.textContent = itemText.value;
  lista.appendChild(item);
  itemText.value = "";
}
