var postItem;
var cpsInterval = setInterval(cashPerSecondWebWorker, 10);

function cashPerSecondWebWorker() {
  cash += (parseInt(cashPerSecond) * parseInt(cashSecondMultiplier)) / 100;
  postItem = [cash, 'cash'];
  postMessage(postItem);
  totalCash += (parseInt(cashPerSecond) * parseInt(cashSecondMultiplier)) / 100;
  saveProgress();
  updateCashDisplay();
  checkShopItem();
  statsDisplay();
  checkForAchievement();
}