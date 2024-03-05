const COUNT_ABBRS = [ '', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'UDc', 'DDc', 'TDc', 'QaDc', 'QiDc', 'SxDc', 'SpDc', 'OxDc', 'NDc', 'Vg', 'UVg', 'DVg', 'TVg', 'Qavg'];

function formatCount(count, decimals = 2) {
  const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  result += `${COUNT_ABBRS[i]}`;
  return result;
}

const achievements = [
  ['First Click', 'Click the clicker button for the first time.', '1'],
  ['Hundred Clicks', 'Click the clicker button 100 times.', '100'],
  ['Dedicated', 'Click the clicker button 1,000 times.', '1000'],
  ['Touch Some Grass', 'Click the clicker button 100,000 times.', '100000'],
  ['No Life!!', 'Click the clicker button 1,000,000 times.', '1000000'],
  ['Are You Using an Auto Clicker?', 'Click the clicker button 1,000,000,000 times.', '1000000000'],
  ['First Purchase', 'Buy your first upgrade.', '1'],
  ['More Upgrades Anyone?', 'Purchase 10 upgrades.', '10'],
  ['Businessman', 'Purchase 100 upgrades.', '100'],
  ['Dedicated Entrepreneur', 'Purchase 500 upgrades.', '500'],
  ['Money Spender', 'Purchase 1,000 upgrades.', '1000'],
  ['Making Money', 'Earn a total of 100 dollars.', '100'],
];
var clickAchieveLength = 6;
var shopAchieveLength = 5;
var cashAchieveLength = 1;
var earnedAchievements = [];

// Get DOM Elements
const clickerBtn = document.getElementById("clickerBtn");
const shopBtn = document.getElementById("shopBtn");
const shopCloseBtn = document.getElementById("shopCloseBtn");
const settingsCloseBtn = document.getElementById("settingsCloseBtn");
const settingsBtn = document.getElementById("settingsBtn");
const cashDisplay = document.getElementById("cashDisplay");
const shopCash = document.getElementById("shopCash");
const cashPerSecondDisplay = document.getElementById("cpsDisplay");
const shopCPS = document.getElementById("shopCPS");
const cashNoDisplay = document.getElementById("cashNoDisplay");
const shopContainer = document.getElementById("shopContainer");
const toggleSFX = document.getElementById("toggleSFX");
const toggleMusic = document.getElementById("toggleMusic");
const toggleSaveData = document.getElementById("toggleSaveData");
const musicAudio = document.getElementById('musicAudio');
const btnClickAudio = document.getElementById('btnClickAudio');
const toggleOnAudio = document.getElementById('toggleOnAudio');
const toggleOffAudio = document.getElementById('toggleOffAudio');
const acceptAudio = document.getElementById('acceptAudio');
const denyAudio = document.getElementById('denyAudio');
const menuAudio = document.getElementById('menuOpenCloseAudio');


// Create Variabes
var cashPerSecondInterval;
var clickerGameSaveData;
const gameVersion = "v_1.4.0_(alpha)";
var earlyAccess = 'false';
var clickDisplay = 'true';
var clickBtnAnimation = 'true';
var btnAnimations = 'true';
var transitionAnimation = 'true';
var gameNotifications = 'true';
var graphicsOptions = [
  clickDisplay,
  clickBtnAnimation,
  btnAnimations,
  transitionAnimation,
  gameNotifications,
];
var inputType = 'standard';
var soundEffects = false;
var music = false;
var saveData = false;
var costMultiplier = 1.05;
var cashMultiplier = 1;
var cashSecondMultiplier = 1;
var cashPerSecond = 0;
var cash = 0;
var totalCash = 0;
var totalClicks = 0;
var totalPurchases = 0;
var clickValue = 1;
var oneCashPerSecondPrice = 50;
var twenFiveCashPerSecondPrice = 1000;
var hundredCashPerSecondPrice = 10000;
var fiveHundredCashPerSecondPrice = 150000;
var thousandCashPerSecondPrice = 500000;
var fiftythousandCashPerSecondPrice = 1000000;
var fiveHundredThousandCashPerSecondPrice = 5000000;
var millionCashPerSecondPrice = 10000000;
var oneCashClickPrice = 100;
var tenCashClickPrice = 2000;
var fiftyCashClickPrice = 20000;
var thousandCashClickPrice = 1000000;
var hundredThousandCashClickPrice = 2000000;
var millionCashClickPrice = 5000000;
var clickMultiplierPrice = 100000000000;
var cpsMultiplierPrice = 100000000000000;

// DEV TEST FUNCTION
function devTest(testCase) {
  if (testCase == 'addCash') {
    cash += 100000000000;
  }
  if (testCase == 'addCPS') {
    cashPerSecond += 1;
  }
  if (testCase == 'addCPC') {
    clickValue += 100000000000;
  }
  if (testCase == 'logData') {
    console.log(`Cash: ${cash}. Cash Per Second: ${cashPerSecond}. Cash Per Click: ${clickValue}.`);
    showNotification(`Cash: ${cash}. Cash Per Second: ${cashPerSecond}. Cash Per Click: ${clickValue}.`, 7500);
  }
  if (testCase == 'clearData') {
    localStorage.clear();
  }
  updateCashDisplay();
  updateCashPerSecondDisplay();
}

// Load Toggles
function setToggleValues() {
  let doSaveData = localStorage.getItem("doSaveData");
  if (doSaveData == "true") {
    document.getElementById('exportImportSavedata').style.display = 'block';
    saveData = true;
    toggleSaveData.checked = true;
    if (localStorage.getItem("doSoundEffects") == "true") {
      soundEffects = true;
      toggleSFX.checked = true;
    } else {
      soundEffects = false;
      toggleSFX.checked = false;
    }
    if (localStorage.getItem("doMusic") == "true") {
      music = true;
      toggleMusic.checked = true;
    } else {
      music = false;
      toggleMusic.checked = false;
    }
  } else {
    saveData = false;
    toggleSaveData.checked = false;
    document.getElementById('exportImportSavedata').style.display = 'none';
  }
}

// Set Shop Prices
function loadShopPrices() {
  document.getElementById("plusOneCashSecond").innerHTML = '+1 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(oneCashPerSecondPrice);
  document.getElementById("plusTwenFiveCashSecond").innerHTML = '+25 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(twenFiveCashPerSecondPrice);
  document.getElementById("plusHundredCashSecond").innerHTML = '+100 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(hundredCashPerSecondPrice);
  document.getElementById("plusFivehundredCashSecond").innerHTML = '+500 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiveHundredCashPerSecondPrice);
  document.getElementById("plusThousandCashSecond").innerHTML = '+1K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashPerSecondPrice);
  document.getElementById("plusFiftyThousandCashSecond").innerHTML = '+50K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiftythousandCashPerSecondPrice);
  document.getElementById("plusFiveHundredThousandCashSecond").innerHTML = '+500K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiveHundredThousandCashPerSecondPrice);
  document.getElementById("plusMillionCashSecond").innerHTML = '+1M <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(millionCashPerSecondPrice);
  document.getElementById("plusOneCashClick").innerHTML = '+1 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(oneCashClickPrice);
  document.getElementById("plusTenCashClick").innerHTML = '+10 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(tenCashClickPrice);
  document.getElementById("plusFiftyCashClick").innerHTML = '+50 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(fiftyCashClickPrice);
  document.getElementById("plusThousandCashClick").innerHTML = '+1K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashClickPrice);
  document.getElementById("plusHundredThousandCashClick").innerHTML = '+100K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(hundredThousandCashClickPrice);
  document.getElementById("plusMillionCashClick").innerHTML = '+250K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(millionCashClickPrice);
  //document.getElementById("onePercentCashSecondMultiplier").innerHTML = '+0.01% <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(cpsMultiplierPrice);
}

// Load Data
function loadVariabeValues() {
  document.getElementById("gameInfo").innerHTML = gameVersion;
  let loadedSaveDataString = localStorage.getItem("clickerSaveData");
  let saveDataArray = JSON.parse(loadedSaveDataString);
  console.log(loadedSaveDataString);
  console.log(saveDataArray);
  let doSaveData = localStorage.getItem("doSaveData");
  if (doSaveData == 'true' && saveDataArray[0] != null) {
    if (parseInt(saveDataArray[0])) {
      totalCash = saveDataArray[0];
    } else {
      totalCash = 0;
    }
    if (parseInt(saveDataArray[1])) {
      cash = saveDataArray[1];
    } else {
      cash = 0;
    }
    if (parseInt(saveDataArray[2])) {
      cashPerSecond = parseInt(saveDataArray[2]);
    } else {
      cashPerSecond = 0;
    }
    if (parseInt(saveDataArray[3])) {
      clickValue = saveDataArray[3];
    } else {
      clickValue = 1;
    }
    if (parseInt(saveDataArray[4])) {
      oneCashPerSecondPrice = parseInt(saveDataArray[4]);
      document.getElementById("plusOneCashSecond").innerHTML = '+1 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(oneCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[5])) {
      twenFiveCashPerSecondPrice = parseInt(saveDataArray[5]);
      document.getElementById("plusTwenFiveCashSecond").innerHTML = '+25 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(twenFiveCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[6])) {
      hundredCashPerSecondPrice = parseInt(saveDataArray[6]);
      document.getElementById("plusHundredCashSecond").innerHTML = '+100 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(hundredCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[7])) {
      fiveHundredCashPerSecondPrice = parseInt(saveDataArray[7]);
      document.getElementById("plusFivehundredCashSecond").innerHTML = '+500 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiveHundredCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[8])) {
      thousandCashPerSecondPrice = parseInt(saveDataArray[8]);
      document.getElementById("plusThousandCashSecond").innerHTML = '+1K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[9])) {
      fiftythousandCashPerSecondPrice = parseInt(saveDataArray[9]);
      document.getElementById("plusFiftyThousandCashSecond").innerHTML = '+50K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiftythousandCashPerSecondPrice);
    }
    if (parseInt(saveDataArray[10])) {
      oneCashClickPrice = parseInt(saveDataArray[10]);
      document.getElementById("plusOneCashClick").innerHTML = '+1 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(oneCashClickPrice);
    }
    if (parseInt(saveDataArray[11])) {
      tenCashClickPrice = parseInt(saveDataArray[11]);
      document.getElementById("plusTenCashClick").innerHTML = '+10 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(tenCashClickPrice);
    }
    if (parseInt(saveDataArray[12])) {
      fiftyCashClickPrice = parseInt(saveDataArray[12]);
      document.getElementById("plusFiftyCashClick").innerHTML = '+50 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(fiftyCashClickPrice);
    }
    if (parseInt(saveDataArray[13])) {
      thousandCashClickPrice = parseInt(saveDataArray[13]);
      document.getElementById("plusThousandCashClick").innerHTML = '+1K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashClickPrice);
    }
    if (parseInt(saveDataArray[14])) {
      hundredThousandCashClickPrice = parseInt(saveDataArray[14]);
      document.getElementById("plusHundredThousandCashClick").innerHTML = '+100K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(hundredThousandCashClickPrice);
    }
    if (parseInt(saveDataArray[15])) {
      millionCashClickPrice = parseInt(saveDataArray[15]);
      document.getElementById("plusMillionCashClick").innerHTML = '+250K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(millionCashClickPrice);
    }
    try {
      earnedAchievements = saveDataArray[16];
    } catch {
      earnedAchievements = [];
    }
    if (parseInt(saveDataArray[17])) {
      totalClicks = parseInt(saveDataArray[17]);
    }
    if (parseInt(saveDataArray[18])) {
      totalPurchases = parseInt(saveDataArray[18]);
    }
    try {
      graphicsOptions = saveDataArray[19];
    } catch {
      graphicsOptions = graphicsOptions;
    }
    showNotification('Save Data Has Been Loaded!');
    document.getElementById('main').style.opacity = '1';
    document.getElementById('loading').style.transition = "all 0.5s ease";
    document.getElementById('loading').style.opacity = "0";
  } else {
    cash = 0;
    clickValue = 1;
    cashPerSecond = 0;
    showNotification('Save Data is off.');
  }
  updateCashDisplay();
  updateCashPerSecondDisplay();
}

// Start Game Audio
function startAudio() {
  if (music) {
    musicAudio.volume = 0.5;
    musicAudio.play();
  } else {
    musicAudio.volume = 0.0;
  }
}

// Save User Progress
function saveProgress() {
  clickerGameSaveData = [
    totalCash,
    Math.round(parseInt(cash)),
    cashPerSecond,
    clickValue,
    oneCashPerSecondPrice,
    twenFiveCashPerSecondPrice,
    hundredCashPerSecondPrice,
    fiveHundredCashPerSecondPrice,
    thousandCashPerSecondPrice,
    fiftythousandCashPerSecondPrice,
    oneCashClickPrice,
    tenCashClickPrice,
    fiftyCashClickPrice,
    thousandCashClickPrice,
    hundredThousandCashClickPrice,
    millionCashClickPrice,
    earnedAchievements,
    totalClicks,
    totalPurchases,
    graphicsOptions
  ];
  let saveDataString = JSON.stringify(clickerGameSaveData);
  localStorage.setItem('clickerSaveData', saveDataString);
}

// Update Cash Display
function updateCashDisplay() {
  cashNoDisplay.innerHTML = cash;
  if (cash >= 1000) {
    cashDisplay.innerHTML = "$" + formatCount(parseInt(cash));
    shopCash.innerHTML = "$" + formatCount(parseInt(cash));
  } else if (cash < 1) {
    cashDisplay.innerHTML = "$" + '0';
    shopCash.innerHTML = "$" + '0';
  } else {
    cashDisplay.innerHTML = "$" + formatCount(parseInt(cash), 0);
    shopCash.innerHTML = "$" + formatCount(parseInt(cash), 0);
  }
}

// Update Cash Per Second Display
function updateCashPerSecondDisplay() {
  cashPerSecondDisplay.innerHTML = "🕛 $" + formatCount(cashPerSecond);
  shopCPS.innerHTML = "🕛 $" + formatCount(cashPerSecond);
}

// Update Price on Purchase
function updatePrice(numToUpdate, type) {
  totalPurchases += 1;
  if (type == 'cash per second') {
    if (numToUpdate == '1') {
      document.getElementById("plusOneCashSecond").innerHTML = '+1 0' + formatCount(oneCashPerSecondPrice);
    }
    if (numToUpdate == '25') {
      document.getElementById("plusTwenFiveCashSecond").innerHTML = '+25 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(twenFiveCashPerSecondPrice);
    }
    if (numToUpdate == '100') {
      document.getElementById("plusHundredCashSecond").innerHTML = '+100 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(hundredCashPerSecondPrice);
    }
    if (numToUpdate == '500') {
      document.getElementById("plusFivehundredCashSecond").innerHTML = '+500 <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiveHundredCashPerSecondPrice);
    }
    if (numToUpdate == '1k') {
      document.getElementById("plusThousandCashSecond").innerHTML = '+1K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashPerSecondPrice);
    }
    if (numToUpdate == '50k') {
      document.getElementById("plusFiftyThousandCashSecond").innerHTML = '+50K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiftythousandCashPerSecondPrice);
    }
    if (numToUpdate == '500k') {
      document.getElementById("plusFiveHundredThousandCashSecond").innerHTML = '+500K <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(fiveHundredThousandCashPerSecondPrice);
    }
    if (numToUpdate == '1m') {
      document.getElementById("plusMillionCashSecond").innerHTML = '+1M <i class="fa-solid fa-stopwatch"></i>: <i class="fa-solid fa-coins"></i> ' + formatCount(millionCashPerSecondPrice);
    }
    showNotification(`Purchased +${numToUpdate} Cash Per Second!`, '4000');
  }
  if (type == 'cash per click') {
    if (numToUpdate == '1') {
      document.getElementById("plusOneCashClick").innerHTML = '+1 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(oneCashClickPrice);
    }
    if (numToUpdate == '10') {
      document.getElementById("plusTenCashClick").innerHTML = '+10 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(tenCashClickPrice);
    }
    if (numToUpdate == '50') {
      document.getElementById("plusFiftyCashClick").innerHTML = '+50 <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(fiftyCashClickPrice);
    }
    if (numToUpdate == '1k') {
      document.getElementById("plusThousandCashClick").innerHTML = '+1K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(thousandCashClickPrice);
    }
    if (numToUpdate == '100k') {
      document.getElementById("plusHundredThousandCashClick").innerHTML = '+100K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(hundredThousandCashClickPrice);
    }
    if (numToUpdate == '1m') {
      document.getElementById("plusMillionCashClick").innerHTML = '+250K <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(millionCashClickPrice);
    }
    //createNotificationElement('Purchase Successful!', `Purchased +${numToUpdate} Cash Per Click!`, 5000);
    showNotification(`Purchased +${numToUpdate} Cash Per Click!`, '4000');
  }
  if (type = 'CPS Multiplier') {
    if (numToUpdate == '.01%') {
      document.getElementById("onePercentCashSecondMultiplier").innerHTML = '+0.01% <i class="fa-regular fa-hand-pointer" style="transform: rotate(-30deg);"></i> : <i class="fa-solid fa-coins"></i> ' + formatCount(clickMultiplierPrice);
    }
  }
}

// Change Brightness of Shop Button if Item is Affordable
function checkShopItem() {
  if (cash >= oneCashPerSecondPrice) {
    document.getElementById("plusOneCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusOneCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= twenFiveCashPerSecondPrice) {
    document.getElementById("plusTwenFiveCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusTwenFiveCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= hundredCashPerSecondPrice) {
    document.getElementById("plusHundredCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusHundredCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= fiveHundredCashPerSecondPrice) {
    document.getElementById("plusFivehundredCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusFivehundredCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= thousandCashPerSecondPrice) {
    document.getElementById("plusThousandCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusThousandCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= fiftythousandCashPerSecondPrice) {
    document.getElementById("plusFiftyThousandCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusFiftyThousandCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= fiveHundredThousandCashPerSecondPrice) {
    document.getElementById("plusFiveHundredThousandCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusFiveHundredThousandCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= millionCashPerSecondPrice) {
    document.getElementById("plusMillionCashSecond").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusMillionCashSecond").style.filter = "brightness(75%)";
  }
  if (cash >= oneCashClickPrice) {
    document.getElementById("plusOneCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusOneCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= tenCashClickPrice) {
    document.getElementById("plusTenCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusTenCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= fiftyCashClickPrice) {
    document.getElementById("plusFiftyCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusFiftyCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= thousandCashClickPrice) {
    document.getElementById("plusThousandCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusThousandCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= hundredThousandCashClickPrice) {
    document.getElementById("plusHundredThousandCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusHundredThousandCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= millionCashClickPrice) {
    document.getElementById("plusMillionCashClick").style.filter = "brightness(100%)";
  } else {
    document.getElementById("plusMillionCashClick").style.filter = "brightness(75%)";
  }
  if (cash >= cpsMultiplierPrice) {
    //document.getElementById("onePercentCashSecondMultiplier").style.filter = "brightness(100%)";
  } else {
    //document.getElementById("onePercentCashSecondMultiplier").style.filter = "brightness(75%)";
  }
}

// Toggle Settings
function toggleSwitch(type, itemIdx = '0') {
  if (type == 'music') {
    console.log("Music on (before): " + music);
    if (toggleMusic.checked == true) {
      music = true;
      if (saveData == true) {
        localStorage.setItem("doMusic", "true");
      }
    } else {
      music = false;
      if (saveData == true) {
        localStorage.setItem("doMusic", "false");
      }
    }
    console.log("Music on (After): " + music);
  } else if (type == 'sfx') {
    console.log("SFX on (before): " + soundEffects);
    if (toggleSFX.checked == true) {
      soundEffects = true;
      if (saveData == true) {
        localStorage.setItem("doSoundEffects", "true");
      }
    } else {
      soundEffects = false;
      if (saveData == true) {
        localStorage.setItem("doSoundEffects", "false");
      }
    }
    console.log("SFX on (After): " + soundEffects);
  } else if (type == 'save data') {
    console.log("Save Data on (before): " + saveData);
    if (toggleSaveData.checked == true) {
      saveData = true;
      document.getElementById('exportImportSavedata').style.display = 'block';
      if (saveData == true) {
        localStorage.setItem("doSaveData", "true");
      }
    } else {
      saveData = false;
      document.getElementById('exportImportSavedata').style.display = 'none';
      if (saveData == false) {
        localStorage.clear();
        localStorage.setItem("doSaveData", "false");
      }
    }
    console.log("Save Data on (After): " + saveData);
  } else if (type == 'graphicsToggle') {
    changeGraphics(itemIdx);
  }
}

// Go to Home Page
function goHome() {
  window.location.href = '../'
}

// Open or Close Shop
function shop(action) {
  if (action == 'open') {
    hideNotification();
    document.getElementById("shop").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
  }
  if (action == 'close') {
    document.getElementById("shop").style.width = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";
  }
}

// Open or Close Settings
function settings(action) {
  if (action == 'open') {
    hideNotification();
    document.getElementById("settings").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
  }
  if (action == 'close') {
    document.getElementById("settings").style.width = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";
  }
}

// Open or Close Stats
function stats(action) {
  if (action == 'open') {
    hideNotification();
    document.getElementById("stats").style.width = "100vw";
    document.getElementById("main").style.marginLeft = "100vw";
  }
  if (action == 'close') {
    document.getElementById("stats").style.width = "0vw";
    document.getElementById("main").style.marginLeft = "0vw";
  }
}

// Check if Item Can Be Purchased. If Yes, Buy.
function purchase(item, amount) {
  if (item == "cash per second") {
    if (amount == '1' && cash >= oneCashPerSecondPrice) {
      cash -= oneCashPerSecondPrice;
      oneCashPerSecondPrice = Math.ceil(oneCashPerSecondPrice * costMultiplier);
      cashPerSecond += 1;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('1', item);
    }
    if (amount == '25' && cash >= twenFiveCashPerSecondPrice) {
      cash -= twenFiveCashPerSecondPrice;
      twenFiveCashPerSecondPrice = Math.ceil(twenFiveCashPerSecondPrice * costMultiplier);
      cashPerSecond += 25;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('25', item);
    }
    if (amount == '100' && cash >= hundredCashPerSecondPrice) {
      cash -= hundredCashPerSecondPrice;
      hundredCashPerSecondPrice = Math.ceil(hundredCashPerSecondPrice * costMultiplier);
      cashPerSecond += 100;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('100', item);
    }
    if (amount == '500' && cash >= fiveHundredCashPerSecondPrice) {
      cash -= fiveHundredCashPerSecondPrice;
      fiveHundredCashPerSecondPrice = Math.ceil(fiveHundredCashPerSecondPrice * costMultiplier);
      cashPerSecond += 500;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('500', item);
    }
    if (amount == '1k' && cash >= thousandCashPerSecondPrice) {
      cash -= thousandCashPerSecondPrice;
      thousandCashPerSecondPrice = Math.ceil(thousandCashPerSecondPrice * costMultiplier);
      cashPerSecond += 1000;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('1k', item);
    }
    if (amount == '50k' && cash >= fiftythousandCashPerSecondPrice) {
      cash -= fiftythousandCashPerSecondPrice;
      fiftythousandCashPerSecondPrice = Math.ceil(fiftythousandCashPerSecondPrice * costMultiplier);
      cashPerSecond += 50000;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('50k', item);
    }
    if (amount == '500k' && cash >= fiveHundredThousandCashPerSecondPrice) {
      cash -= fiveHundredThousandCashPerSecondPrice;
      fiveHundredThousandCashPerSecondPrice = Math.ceil(fiveHundredThousandCashPerSecondPrice * costMultiplier);
      cashPerSecond += 500000;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('500k', item);
    }
    if (amount == '1m' && cash >= millionCashPerSecondPrice) {
      cash -= millionCashPerSecondPrice;
      millionCashPerSecondPrice = Math.ceil(millionCashPerSecondPrice * costMultiplier);
      cashPerSecond += 1000000;
      updateCashDisplay();
      updateCashPerSecondDisplay();
      updatePrice('1m', item);
    }
  }
  if (item == "cash per click") {
    if (amount == '1' && cash >= oneCashClickPrice) {
      cash -= oneCashClickPrice;
      oneCashClickPrice = Math.ceil(oneCashClickPrice * costMultiplier);
      clickValue += 1;
      updateCashDisplay();
      updatePrice('1', item);
    }
    if (amount == '10' && cash >= tenCashClickPrice) {
      cash -= tenCashClickPrice;
      tenCashClickPrice = Math.ceil(tenCashClickPrice * costMultiplier);
      clickValue += 10;
      updateCashDisplay();
      updatePrice('10', item);
    }
    if (amount == '50' && cash >= fiftyCashClickPrice) {
      cash -= fiftyCashClickPrice;
      fiftyCashClickPrice = Math.ceil(fiftyCashClickPrice * costMultiplier);
      clickValue += 50;
      updateCashDisplay();
      updatePrice('50', item);
    }
    if (amount == '1k' && cash >= thousandCashClickPrice) {
      cash -= thousandCashClickPrice;
      thousandCashClickPrice = Math.ceil(thousandCashClickPrice * costMultiplier);
      clickValue += 1000;
      updateCashDisplay();
      updatePrice('1k', item);
    }
    if (amount == '100k' && cash >= hundredThousandCashClickPrice) {
      cash -= hundredThousandCashClickPrice;
      hundredThousandCashClickPrice = Math.ceil(hundredThousandCashClickPrice * costMultiplier);
      clickValue += 100000;
      updateCashDisplay();
      updatePrice('100k', item);
    }
    if (amount == '1m' && cash >= millionCashClickPrice) {
      cash -= millionCashClickPrice;
      millionCashClickPrice = Math.ceil(millionCashClickPrice * costMultiplier);
      clickValue += 250000;
      updateCashDisplay();
      updatePrice('1m', item);
    }
  }
  if (item == "CPS Multiplier") {
    if (amount == '.01%' && cash >= cpsMultiplierPrice) {
      cash -= cpsMultiplierPrice;
      cpsMultiplierPrice = Math.ceil(cpsMultiplierPrice * costMultiplier);
      cashSecondMultiplier = cashSecondMultiplier + (cashPerSecond * 0.01);
      updateCashDisplay();
      updatePrice(amount, item);
    }
  }
  checkShopItem();
  saveProgress();
}

// Update Stats
function statsDisplay() {
  document.getElementById("totalCashStat").innerHTML = "Total Cash: " + formatCount(totalCash);
  document.getElementById("cashPerSecondStat").innerHTML = "Cash Per Second: " + formatCount(cashPerSecond);
  document.getElementById("cashSecondMultStat").innerHTML = "Cash Per Second Multiplier: 1";
  document.getElementById("cashPerClickStat").innerHTML = "Cash Per Click: " + formatCount(clickValue);
  document.getElementById("cashClickMultStat").innerHTML = "Cash Per Click Multiplier: 1";
  document.getElementById("totalClicksStat").innerHTML = "Total Clicks: " + formatCount(totalClicks);
}

// Generate Random Number
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// initialize game
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadVariabeValues();
    loadShopPrices();
    setToggleValues();
    //startAudio();
    cashPerSecondInterval = setInterval(cashpersecond, 10);
  }
}

// Show Achievement Earned
function displayAchievements() {
  for (var i = 0; i < earnedAchievements.length; i++) {
    let itemNumForId = i + 1;
    let itemId = `a${itemNumForId}`;
    let aItem = document.getElementById(itemId);
    aItem.innerHTML = 'Earned';
  }
}

// Check if Achievement Was Earned
function checkForAchievement() {
  var index = 0;
  for (var i = 0; i < clickAchieveLength; i++) {
    if (totalClicks >= parseInt(achievements[i][2]) && earnedAchievements.includes(achievements[i][0]) == false) {
      showAchievement(i);
      earnedAchievements.push(achievements[i][0]);
    }
    index += 1;
  }
  for (var i = 0; i < shopAchieveLength; i++) {
    if (totalPurchases >= parseInt(achievements[index][2]) && earnedAchievements.includes(achievements[index][0]) == false) {
      earnedAchievements.push(achievements[index][0]);
    }
    index += 1;
  }
  for (var i = 0; i < cashAchieveLength; i++) {
    if (totalCash >= parseInt(achievements[index][2]) && earnedAchievements.includes(achievements[index][0]) == false) {
      earnedAchievements.push(achievements[index][0]);
    }
    index += 1;
  }
}

// Show Achievement When Earned
function showAchievement(idx) {
  let achiItem = achievements[idx];
  let achiTitle = achiItem[0];
  let achiBody = achiItem[1];
  notiTitle.innerHTML = `Achievement: ${achiTitle}`;
  actionNoti.innerHTML = achiBody;
  notification.style.left = '1vw';
  notificationTimeout = setTimeout(() => {
    notification.style.left = '-20rem';
  }, 5000);
}

// Display Click Values on Click
var plusCount = 0;
clickerBtn.addEventListener("click", function(e) {
  totalClicks += 1;
  if (graphicsOptions[0] == 'true') {
    let mainPage = document.getElementById('main');
    let mouseX = e.clientX - getRandomInt(0, 10);
    let mouseY = e.clientY - getRandomInt(30, 50);
    let itemX = mouseX;
    let itemY = mouseY;
    let item = document.createElement('div');
    let itemCoin = document.createElement('div');
    itemCoin.classList.add('clicker');
    itemCoin.style.transform = 'scale(0.5)';
    itemCoin.style.top = `${itemY}px`;
    itemCoin.style.left = `${itemX}px`;
    itemCoin.style.transitionDuration = '1s';
    itemCoin.style.transitionTimingFunction = 'ease-out';
    itemCoin.style.transitionDuration = '0.5s';
    item.style.position = 'absolute';
    item.style.width = 'fit-content';
    item.style.height = 'fit-content';
    item.style.fontSize = `calc(2vw + 2vh)`;
    item.style.fontWeight = '600';
    item.style.top = `${itemY}px`;
    item.style.left = `${itemX}px`;
    item.style.transitionDuration = '1s';
    item.style.transitionTimingFunction = 'ease-out';
    item.style.color = 'black';
    let txtNode = document.createTextNode(`+${formatCount(clickValue)}`);
    item.appendChild(txtNode);
    plusCount += 1;
    item.id = `item${plusCount}`;
    mainPage.appendChild(item);
    let id = null;
    const elem = document.getElementById(item.id);   
    let pos = 0;
    let finalPos = itemX + 500;
    let opa = 1;
    let friction = 1;
    let newPos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == finalPos) {
        clearInterval(id);
      } else {
        pos++;
        newPos = pos / friction;
        opa = opa - 0.06;
        elem.style.top = newPos + "px"; 
        elem.style.opacity = opa;
      }
    }
    const timeout = setTimeout(function() {
      //item.remove();
      mainPage.removeChild(item);
      clearInterval(id);
      //console.log(`Removed item ${itemId}`);
    }, 1500);
  }
  cash = parseInt(cash) + (parseInt(clickValue) * parseInt(cashMultiplier));
  totalCash = parseInt(totalCash) + parseInt(clickValue);
  if (document.readyState == "complete") {
    saveProgress();
  }
  updateCashDisplay();
  checkShopItem();
  statsDisplay();
});

// Update Cash and Set Display
function cashpersecond() {
  cash += (parseInt(cashPerSecond) * parseInt(cashSecondMultiplier)) / 100;
  totalCash += (parseInt(cashPerSecond) * parseInt(cashSecondMultiplier)) / 100;
  saveProgress();
  updateCashDisplay();
  checkShopItem();
  statsDisplay();
  checkForAchievement();
  displayAchievements();
}

// Check if User Opted Into Early Access
function checkEarlyAccess() {
  const searchParams = new URLSearchParams(window.location.search);
  let username = searchParams.get('username');
  if (username == 'SevenT33N') {
    earlyAccess = 'true';
  }
  if (earlyAccess == 'true') {
    let earlyAccessItems = document.querySeletorAll('.early-access-item');
    for (var i = 0; i < earlyAccessItems.length; i++) {
      let item = earlyAccessItems[i];
      item.style.display = 'block';
    }
  } else {
    document.getElementById('earlyAccessBtn').style.display = 'flex';
  }
}