const devHelper = document.getElementById('devHelper');
const savingsCardAmount = document.getElementById('savingsCardAmount');
const savingsCardWidth = document.getElementById('savingsCardFillAmount');

var saveDataString;
var savingsGoal = 9000;
var currentSavings = 3000;
var loggedMoney = [];

function loadSaveData() {
  saveDataString = localStorage.getItem('finaceAppSaveData');
  if (saveData == null) {
    saveDataString = [];
  }
}

savingsCardAmount.innerHTML = `$${currentSavings} / $${savingsGoal}`;
savingsCardFillAmount.style.width = `${Math.round((currentSavings / savingsGoal) * 100)}%`;
//devHelper.innerHTML = `${Math.round((currentSavings / savingsGoal) * 100)}%`;