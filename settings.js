let saveFav = document.getElementById("faveSave");
let clearSave = document.getElementById("clearSave");

let saveFave = localStorage.getItem("saveFave");

if (saveFave == null || saveFave == "true") {
  saveFav.checked = true;
}

saveFav.addEventListener("click", function() {
  if (clearSave.checked == true && saveFav.checked == true) {
    clearSave.checked = false;
  }
});
clearSave.addEventListener("click", function() {
  if (clearSave.checked == true && saveFav.checked == true) {
    saveFav.checked = false;
  }
});

function saveSettings() {
  if (saveFav.checked == true) {
    localStorage.setItem("saveFave", "true");
  } else {
    localStorage.setItem("saveFave", "false");
  }
  if (clearSave.checked == true) {
    localStorage.clear();
    alertUser("Save Data Cleared");
    saveFav.checked = true;
    clearSave.checked = false;
  } else {
    clearSave.checked = false;
  }
}