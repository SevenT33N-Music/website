const clickerButtons = ['clicker', 'shop', 'settings', 'stats'];
const shopButtons = ['close', 'oneCps', 'twentyFiveCps', 'hundredCps', 'fiveHundredCps', 'thousandCps', 'fiftyThousandCps', 'oneCpc', 'tenCpc', 'fiftyCpc', 'thousandCpc', 'hundredThousandCpc', 'twoFiftyThousandCpc'];
const shopButtonsId = ['plusOneCashSecond', 'plusTwenFiveCashSecond', 'plusHundredCashSecond', 'plusFivehundredCashSecond', 'plusThousandCashSecond', 'plusFiftyThousandCashSecond', 'plusOneCashClick', 'plusTenCashClick', 'plusFiftyCashClick', 'plusThousandCashClick', 'plusHundredThousandCashClick', 'plusMillionCashClick'];
const settngsButtons = ['close', 'music', 'sfx', 'allowSave', 'export', 'import'];
const settingsBtnsId = ['musicToggleSwitch', 'toggleSFX', 'toggleSaveData', 'exportSave', 'importSave'];
const settingsScrollToId = ['music', 'sfx', 'savedata', 'exportSave', 'importSave'];
const pages = ['clicker', 'shop', 'settings', 'stats'];
var currentPage = pages[0];
var currentBtn = clickerButtons[0];

function gamepads() {
  var gamepads = navigator.getGamepads();
  console.log(gamepads);
}

window.addEventListener('keydown', function(e) {
  if (e.key == 'ArrowUp' || e.key == 'ArrowDown' || e.key == 'ArrowLeft' || e.key == 'ArrowRight' || e.key == ' ' || e.key == "Enter") {
    if (inputType == 'standard') {
      inputType = 'gamepad';
      console.log(`Input Type: ${inputType}`);
    } else {
      if (e.key == 'ArrowDown') {
        checkInput('down arrow');
      } else if (e.key == 'ArrowUp') {
        checkInput('up arrow');
      } else if (e.key == ' ' || e.key == "Enter") {
        checkInput('x');
      }
    }
  }
  console.log(currentBtn);
  console.log(currentPage);
});

window.addEventListener("gamepadconnected", (event) => {
  if (inputType == 'standard') {
    inputType = 'gamepad';
    console.log(`Input Type: ${inputType}`);
  }
  console.log(event.gamepad);
  gamepads();
});

window.addEventListener("gamepaddisconnected", (event) => {
  console.log("gamepad disconnected...");
  gamepads();
});

window.addEventListener("mousemove", function() {
  if (inputType == 'gamepad') {
    inputType = 'standard';
    if (currentPage == 'clicker') {
      currentBtn = 'clicker';
    } else if (currentPage == 'shop') {
      currentBtn = 'close';
    }
    console.log(`Input Type: ${inputType}`);
  }
});

let gamepad = null;
function updateGamepad() {
  requestAnimationFrame(updateGamepad);
  if (inputType == 'gamepad') {
    if (currentPage == 'clicker') {
      if (currentBtn == 'clicker') {
        clickerBtn.classList.add('gamepad-active-btn');
      } else {
        clickerBtn.classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'shop') {
        shopBtn.classList.add('gamepad-active-btn');
      } else {
        shopBtn.classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'settings') {
        settingsBtn.classList.add('gamepad-active-btn');
      } else {
        settingsBtn.classList.remove('gamepad-active-btn');
      }
    } else if (currentPage == 'shop') {
      if (currentBtn == 'close') {
        shopCloseBtn.classList.add('gamepad-active-btn');
      } else {
        shopCloseBtn.classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'oneCps') {
        document.getElementById("plusOneCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusOneCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'twentyFiveCps') {
        document.getElementById("plusTwenFiveCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusTwenFiveCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'hundredCps') {
        document.getElementById("plusHundredCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusHundredCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'fiveHundredCps') {
        document.getElementById("plusFivehundredCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusFivehundredCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'thousandCps') {
        document.getElementById("plusThousandCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusThousandCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'fiftyThousandCps') {
        document.getElementById("plusFiftyThousandCashSecond").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusFiftyThousandCashSecond").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'oneCpc') {
        document.getElementById("plusOneCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusOneCashClick").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'tenCpc') {
        document.getElementById("plusTenCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusTenCashClick").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'fiftyCpc') {
        document.getElementById("plusFiftyCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusFiftyCashClick").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'thousandCpc') {
        document.getElementById("plusThousandCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusThousandCashClick").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'hundredThousandCpc') {
        document.getElementById("plusHundredThousandCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusHundredThousandCashClick").classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'twoFiftyThousandCpc') {
        document.getElementById("plusMillionCashClick").classList.add('gamepad-active-btn');
      } else {
        document.getElementById("plusMillionCashClick").classList.remove('gamepad-active-btn');
      }
    } else if (currentPage == 'settings') {
      if (currentBtn == 'close') {
        settingsCloseBtn.classList.add('gamepad-active-btn');
      } else {
        settingsCloseBtn.classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'music') {
        document.getElementById('musicToggleSwitch').classList.add('gamepad-active-btn');
      } else {
        document.getElementById('musicToggleSwitch').classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'sfx') {
        document.getElementById('sfxToggleSwitch').classList.add('gamepad-active-btn');
      } else {
        document.getElementById('sfxToggleSwitch').classList.remove('gamepad-active-btn');
      }
      if (currentBtn == 'allowSave') {
        document.getElementById('savedataToggleSwitch').classList.add('gamepad-active-btn');
      } else {
        document.getElementById('savedataToggleSwitch').classList.remove('gamepad-active-btn');
      }
      let doSaveData = localStorage.getItem("doSaveData");
      if (doSaveData == 'true') {
        if (currentBtn == 'export') {
          document.getElementById('exportSave').classList.add('gamepad-active-btn');
        } else {
          document.getElementById('exportSave').classList.remove('gamepad-active-btn');
        }
        if (currentBtn == 'import') {
          document.getElementById('importSave').classList.add('gamepad-active-btn');
        } else {
          document.getElementById('importSave').classList.remove('gamepad-active-btn');
        }
      }
    }
  } else {
    clickerBtn.classList.remove('gamepad-active-btn');
    shopBtn.classList.remove('gamepad-active-btn');
    settingsBtn.classList.remove('gamepad-active-btn');
    shopCloseBtn.classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[1]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[2]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[3]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[4]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[5]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[6]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[7]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[8]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[9]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[10]).classList.remove('gamepad-active-btn');
    document.getElementById(shopButtonsId[11]).classList.remove('gamepad-active-btn');
  }
  let newGamepad = navigator.getGamepads()[0];
  if (!newGamepad) return;
  newGamepad.buttons.forEach((button, index) => {
    const oldButtonPressed = gamepad?.buttons[index].pressed;
    if (button.pressed !== oldButtonPressed) {
      if (button.pressed && !oldButtonPressed) {
        document.dispatchEvent(
          new CustomEvent("gamepadButtonDown", {
            detail: { buttonIndex: index },
          })
        );
      }
      if (!button.pressed && oldButtonPressed) {
        document.dispatchEvent(
          new CustomEvent("gamepadButtonUp", { detail: { buttonIndex: index } })
        );
      }
    }
  });
  gamepad = newGamepad;
}
updateGamepad();

function checkInput(btn) {
  if (btn == 'x') {
    if (currentPage == 'clicker') {
      if (currentBtn == 'clicker') {
        clickerBtn.click();
        clickerBtn.classList.remove("gamepad-click");
        clickerBtn.offsetWidth;
        clickerBtn.classList.add("gamepad-click");
      } else if (currentBtn == 'shop') {
        shopBtn.click();
        shopBtn.classList.remove("gamepad-small-click");
        shopBtn.offsetWidth;
        shopBtn.classList.add("gamepad-small-click");
        currentPage = 'shop';
        currentBtn = shopButtons[0];
      } else if (currentBtn == 'settings') {
        settingsBtn.classList.remove("gamepad-small-click");
        settingsBtn.offsetWidth;
        settingsBtn.classList.add("gamepad-small-click");
        currentPage = 'settings';
        currentBtn = settngsButtons[0];
        settingsBtn.click();
      }
    } else if (currentPage == 'shop') {
      if (currentBtn == 'close') {
        shopCloseBtn.classList.remove("gamepad-small-click");
        shopCloseBtn.offsetWidth;
        shopCloseBtn.classList.add("gamepad-small-click");
        shopCloseBtn.click();
        currentPage = 'clicker';
        currentBtn = clickerButtons[0];
      } else if (currentBtn == 'oneCps') {
        document.getElementById("plusOneCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusOneCashSecond").offsetWidth;
        document.getElementById("plusOneCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusOneCashSecond").click();
      } else if (currentBtn == 'twentyFiveCps') {
        document.getElementById("plusTwenFiveCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusTwenFiveCashSecond").offsetWidth;
        document.getElementById("plusTwenFiveCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusTwenFiveCashSecond").click();
      } else if (currentBtn == 'hundredCps') {
        document.getElementById("plusHundredCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusHundredCashSecond").offsetWidth;
        document.getElementById("plusHundredCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusHundredCashSecond").click();
      } else if (currentBtn == 'fiveHundredCps') {
        document.getElementById("plusFivehundredCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusFivehundredCashSecond").offsetWidth;
        document.getElementById("plusFivehundredCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusFivehundredCashSecond").click();
      } else if (currentBtn == 'thousandCps') {
        document.getElementById("plusThousandCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusThousandCashSecond").offsetWidth;
        document.getElementById("plusThousandCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusThousandCashSecond").click();
      } else if (currentBtn == 'fiftyThousandCps') {
        document.getElementById("plusFiftyThousandCashSecond").classList.remove("gamepad-small-click");
        document.getElementById("plusFiftyThousandCashSecond").offsetWidth;
        document.getElementById("plusFiftyThousandCashSecond").classList.add("gamepad-small-click");
        document.getElementById("plusFiftyThousandCashSecond").click();
      } else if (currentBtn == 'oneCpc') {
        document.getElementById("plusOneCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusOneCashClick").offsetWidth;
        document.getElementById("plusOneCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusOneCashClick").click();
      } else if (currentBtn == 'tenCpc') {
        document.getElementById("plusTenCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusTenCashClick").offsetWidth;
        document.getElementById("plusTenCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusTenCashClick").click();
      } else if (currentBtn == 'fiftyCpc') {
        document.getElementById("plusFiftyCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusFiftyCashClick").offsetWidth;
        document.getElementById("plusFiftyCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusFiftyCashClick").click();
      } else if (currentBtn == 'thousandCpc') {
        document.getElementById("plusThousandCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusThousandCashClick").offsetWidth;
        document.getElementById("plusThousandCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusThousandCashClick").click();
      } else if (currentBtn == 'hundredThousandCpc') {
        document.getElementById("plusHundredThousandCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusHundredThousandCashClick").offsetWidth;
        document.getElementById("plusHundredThousandCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusHundredThousandCashClick").click();
      } else if (currentBtn == 'twoFiftyThousandCpc') {
        document.getElementById("plusMillionCashClick").classList.remove("gamepad-small-click");
        document.getElementById("plusMillionCashClick").offsetWidth;
        document.getElementById("plusMillionCashClick").classList.add("gamepad-small-click");
        document.getElementById("plusMillionCashClick").click();
      }
    } else if (currentPage == 'settings') {
      if (currentBtn == 'close') {
        settingsCloseBtn.classList.remove("gamepad-small-click");
        settingsCloseBtn.offsetWidth;
        settingsCloseBtn.classList.add("gamepad-small-click");
        settingsCloseBtn.click();
        currentPage = 'clicker';
        currentBtn = clickerButtons[0];
      } else if (currentBtn == 'music') {
        document.getElementById("musicToggleSwitch").classList.remove("gamepad-small-click");
        document.getElementById("musicToggleSwitch").offsetWidth;
        document.getElementById("musicToggleSwitch").classList.add("gamepad-small-click");
        document.getElementById("toggleMusic").click();
      } else if (currentBtn == 'sfx') {
        document.getElementById("sfxToggleSwitch").classList.remove("gamepad-small-click");
        document.getElementById("sfxToggleSwitch").offsetWidth;
        document.getElementById("sfxToggleSwitch").classList.add("gamepad-small-click");
        document.getElementById("toggleSFX").click();
      } else if (currentBtn == 'allowSave') {
        document.getElementById("savedataToggleSwitch").classList.remove("gamepad-small-click");
        document.getElementById("savedataToggleSwitch").offsetWidth;
        document.getElementById("savedataToggleSwitch").classList.add("gamepad-small-click");
        document.getElementById("toggleSaveData").click();
      } else if (currentBtn == 'export') {
        document.getElementById("exportSave").classList.remove("gamepad-small-click");
        document.getElementById("exportSave").offsetWidth;
        document.getElementById("exportSave").classList.add("gamepad-small-click");
        document.getElementById("exportSave").click();
      } else if (currentBtn == 'import') {
        document.getElementById("importSave").classList.remove("gamepad-small-click");
        document.getElementById("importSave").offsetWidth;
        document.getElementById("importSave").classList.add("gamepad-small-click");
        document.getElementById("importSave").click();
      }
    }
  }
  if (btn == 'down arrow') {
    if (currentPage == 'clicker') {
      if (currentBtn == 'clicker') {
        currentBtn = clickerButtons[1];
      } else if (currentBtn == 'shop') {
        currentBtn = clickerButtons[2];
      }
    } else if (currentPage == 'shop') {
      if (shopButtons.indexOf(currentBtn) !== shopButtons.length - 1) {
        newIndex = shopButtons.indexOf(currentBtn) + 1;
        currentBtn = shopButtons[newIndex];
        let btnId = shopButtonsId[newIndex];
        let btn = document.createElement("a");
        btn.href = `#${btnId}`;
        btn.click();
        if (newIndex < 11) {
          let shopContainer = document.getElementById("shopContainer");
          shopContainer.scrollBy(0, -200);
        }
      }
    } else if (currentPage == 'settings') {
      let doSaveData = localStorage.getItem("doSaveData");
      if (settngsButtons.indexOf(currentBtn) !== settngsButtons.length - 1) {
        if (doSaveData == 'true') {
          newIndex = settngsButtons.indexOf(currentBtn) + 1;
          currentBtn = settngsButtons[newIndex];
          let btnId = settingsScrollToId[newIndex - 1];
          let btn = document.createElement("a");
          btn.href = `#${btnId}`;
          btn.click();
        } else {
          if (settngsButtons.indexOf(currentBtn) + 1 < settngsButtons.length - 2) {
            newIndex = settngsButtons.indexOf(currentBtn) + 1;
            currentBtn = settngsButtons[newIndex];
            let btnId = settingsScrollToId[newIndex - 1];
            let btn = document.createElement("a");
            btn.href = `#${btnId}`;
            btn.click();
          }
        }
      }
    }
  }
  if (btn == 'up arrow') {
    if (currentPage == 'clicker') {
      if (currentBtn == 'settings') {
        currentBtn = clickerButtons[1];
      } else if (currentBtn == 'shop') {
        currentBtn = clickerButtons[0];
      }
    } else if (currentPage == 'shop') {
      if (shopButtons.indexOf(currentBtn) != 0) {
        newIndex = shopButtons.indexOf(currentBtn) - 1;
        currentBtn = shopButtons[newIndex];
        let btnId = shopButtonsId[newIndex];
        let btnLink = document.createElement("a");
        btnLink.href = `#${btnId}`;
        btnLink.click();
        if (newIndex < 11) {
          let shopContainer = document.getElementById("shopContainer");
          shopContainer.scrollBy(0, -200);
        }
      }
    } else if (currentPage == 'settings') {
      if (settngsButtons.indexOf(currentBtn) != 0) {
        newIndex = settngsButtons.indexOf(currentBtn) - 1;
        currentBtn = settngsButtons[newIndex];
        let btnId = settingsScrollToId[newIndex - 1];
        let btn = document.createElement("a");
        btn.href = `#${btnId}`;
        btn.click();
      }
    }
  } else if (btn == 'o') {
    if (currentPage == 'shop') {
      shopCloseBtn.click();
      currentPage = 'clicker';
      currentBtn = 'clicker';
    }
  }
}

document.addEventListener("gamepadButtonDown", (event) => {
  if (inputType == 'standard') {
    inputType = 'gamepad';
    console.log(`Input Type: ${inputType}`);
  }
  if (event.detail.buttonIndex === 0) {
    console.log('x pressed');
    checkInput('x');
  } else if (event.detail.buttonIndex === 13) {
    console.log('down arrow pressed');
    checkInput('down arrow');
  } else if (event.detail.buttonIndex === 12) {
    console.log('Up arrow pressed');
    checkInput('up arrow');
  } else if (event.detail.buttonIndex === 1) {
    console.log('Circle Pressed');
    checkInput('o');
  } else {
    console.log(`Gamepad ID ${event.detail.buttonIndex} pressed`);
  }
});
document.addEventListener("gamepadButtonUp", (event) => {
  if (inputType == 'standard') {
    inputType = 'gamepad';
    console.log(`Input Type: ${inputType}`);
  }
  if (inputType == 'gamepad') {
    if (event.detail.buttonIndex === 0) {
      console.log('x released');
      checkInput('x release');
    } else if (event.detail.buttonIndex === 13) {
      console.log('down arrow released');
    } else {
      console.log(`Gamepad ID ${event.detail.buttonIndex} released`);
    }
  }
});