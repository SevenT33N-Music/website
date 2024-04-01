function goHome() {
  window.location.href = '../'
}
/* ===== Game Scripts ===== */
const shopButtons = {
  plus1Cpc: [1, 50],
  plus5Cpc: [5, 100],
  plus10Cpc: [10, 500],
  plus25Cpc: [25, 1000],
  plus50Cpc: [50, 1250],
  plus1Cps: [1, 10],
  plus5Cps: [5, 100],
  plus10Cps: [10, 500]
}

function loadShopButtons() {
  for (i = 0; i < Object.keys(shopButtons).length; i++) {
    let item = Object.keys(shopButtons)[i];
    let btn = document.createElement('div');
    btn.classList.add('shop-item');
    btn.id = `item${i}`;
    btn.innerHTML = `+${item.}`;
    let appendTo = document.getElementById('btnContainer');
    appendTo.appendChild(btn);
  }
}
loadShopButtons();

function toggleShop() {
  let shopContainer = document.querySelector('.shop-container');
  if (shopContainer.classList.contains('shopOpen')) {
    shopContainer.classList.remove('shopOpen');
  } else {
    shopContainer.classList.add('shopOpen');
  }
  
}