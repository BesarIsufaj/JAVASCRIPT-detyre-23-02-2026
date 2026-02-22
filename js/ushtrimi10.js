function pershendetja() {
    let emri = document.getElementById("emri").value;
    
    let mesazhi = emri
      ? `Mirë se erdhe, ${emri}!`
      : "Shkruaj emrin!";

      document.getElementById("mesazhi").textContent=mesazhi
  }
