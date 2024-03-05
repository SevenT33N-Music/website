// Create The Save Data
function createExportValue() {
  let savedataExportValue = '{' +
  '"cashItems": {' +
    `"totalCash": "${totalCash}",` +
    `"cash": "${cash}",` +
    `"clickValue": "${clickValue}",` +
    `"cashPerSecond": "${cashPerSecond}"` +
  '},' +
    '"shopItems": {' +
      '"cashPerSecond": {' +
        `"oneCpsPrice": "${oneCashPerSecondPrice}",` +
        `"twentyfiveCpsPrice": "${twenFiveCashPerSecondPrice}",` +
        `"hundredCpsPrice": "${hundredCashPerSecondPrice}",` +
        `"fivehundredCpsPrice": "${fiveHundredCashPerSecondPrice}",` +
        `"thousandCpsPrice": "${thousandCashPerSecondPrice}",` +
        `"fiftythousandCpsPrice": "${fiftythousandCashPerSecondPrice}"` +
      '},' +
      '"cashPerClick": {' +
        `"oneCpcPrice": "${oneCashClickPrice}",` +
        `"tenCpcPrice": "${tenCashClickPrice}",` +
        `"fiftyCpcPrice": "${fiftyCashClickPrice}",` +
        `"thousandCpcPrice": "${thousandCashClickPrice}",` +
        `"hundredthousandCpcPrice": "${hundredThousandCashClickPrice}",` +
        `"twofiftyThousandCpcPrice": "${millionCashClickPrice}"` +
      '}' +
    '}' +
  '}';
  const textarea = document.querySelector("textarea"),
  fileNameInput = document.querySelector(".file-name input"),
  selectMenu = document.querySelector(".save-as select");
  textarea.value = savedataExportValue;
  const blob = new Blob([textarea.value], {type: selectMenu.value});
  const fileUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = fileNameInput.value;
  link.href = fileUrl;
  link.click();
}

function readJSON (event) {
  clearInterval(cashPerSecondInterval);
  let str = event.target.result;
  try {
    let json = JSON.parse(str);
    console.log('json', json);
    // Cash Items
    cash = parseInt(json.cashItems.cash);
    console.log(`Cash: ${cash}. Type: ${typeof cash}`);
    totalCash = parseInt(json.cashItems.totalCash);
    clickValue = parseInt(json.cashItems.clickValue);
    cashPerSecond = parseInt(json.cashItems.cashPerSecond);
    // Shop Items
    // Cash Per Second
    oneCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.oneCpsPrice);
    twenFiveCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.twentyfiveCpsPerPrice);
    hundredCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.hundredCpsPerPrice);
    fiveHundredCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.fivehundredCpsPerPrice);
    thousandCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.thousandCpsPerPrice);
    fiftythousandCashPerSecondPrice = parseInt(json.shopItems.cashPerSecond.fiftythousandCpsPerPrice);
    // Cash Per Click
    oneCashClickPrice = parseInt(json.shopItems.cashPerClick.oneCpcPrice);
    tenCashClickPrice = parseInt(json.shopItems.cashPerClick.tenCpcPrice);
    fiftyCashClickPrice = parseInt(json.shopItems.cashPerClick.fiftyCpcPrice);
    thousandCashClickPrice = parseInt(json.shopItems.cashPerClick.thousandCpcPrice);
    hundredThousandCashClickPrice = parseInt(json.shopItems.cashPerClick.hundredthousandCpcPrice);
    millionCashClickPrice = parseInt(json.shopItems.cashPerClick.twofiftyThousandCpcPrice);
    cashMultiplier = parseInt(json.cashItems.cashMultiplier);
    cashMultiplier = parseInt(json.cashItems.cashMultiplier);
    cashSecondMultiplier = parseInt(json.cashItems.cashSecondMultiplier);
    updateCashDisplay();
    updateCashPerSecondDisplay();
    cashPerSecondInterval = setInterval(cashpersecond, 10);
    showNotification('Save Data Has Been Loaded!');
  } catch {
    console.log('error');
  }
}
// Prompt For File
function getFile() {
  let file = document.querySelector('#fileUpload');
  file.click();
}
// Check that file has been uploaded
function checkFileUploaded() {
  let file = document.querySelector('#fileUpload');
  if (file.files.length > 0) {
    let reader = new FileReader();
    reader.onload = readJSON;
    reader.readAsText(file.files[0]);
  } else {
    alert('Please upload a file');
  }
}
// event listener for file upload
document.querySelector('#fileUpload').addEventListener('change', checkFileUploaded);