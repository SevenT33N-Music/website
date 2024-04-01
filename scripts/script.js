// Log if Media Session API is supported
console.log(`Media Session API Supported: ${"mediaSession" in navigator}`)

// DOM VARIABLES
var root = document.querySelector(':root');
var canClick = true;
var mobileUser = false;
var page = 'home';
var newNotiNumbers = 0;
var totalNotiCircles = 0;
var trashcanNum = 0;
var currentPFP = 'regular';
var selectedIconId = '';
var iconBeforeEdit = '';
var primeColorBeforeEdit = '';
var backColorBeforeEdit = '';
var profileDataArr = [];
var lightMode = false;

// Const Variables
const doDataCache = true;
const settingsArrLen = 2;

// New Notification Variables
let mobileTitle = 'Alert Acknowledged';
let mobileBody = 'This notification is to let you know you have acknowledged the mobile alert. As a reminder, add this site to your home screen or use a desktop device for a better experience.';

// Check if User is Mobile or Not
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
let deviceCheck = window.mobileCheck();
if (deviceCheck == true) {
  mobileUser = true;
  root.style.setProperty('--display', 'none');
} else {
  root.style.setProperty('--display', 'block');
  canClick = false;
}

// Check if Song Has Been Shared
if (shareCheck == true) {
  console.log("Song Shared");
  document.getElementById('shareCover').src = `images/${playlist.cover[0]}.jpg`;
  document.getElementById('shareSongInfo').innerHTML = "Song Shared: " + playlist.song[0];
} else {
  console.log("Song Was Not Shared");
}
function setPageStyle(type = "dark") {
  if (type == "light" || type == "true" || type == true) {
    r.style.setProperty('--font-color', 'black');
    r.style.setProperty('--background-color', '#d2ccff');
    r.style.setProperty('--thumb-color', '#505a8b');
    r.style.setProperty('--temp-link-background', '#ffffff');
    r.style.setProperty('--card-background', 'linear-gradient(-45deg, #3a1556 0%, #1c404f 100%)');
    r.style.setProperty('--card-fallback-background', '#1c404f');
  }
  else {
    r.style.setProperty('--font-color', 'white');
    r.style.setProperty('--background-color', '#2e2e2e');
    r.style.setProperty('--thumb-color', '#c3cdfe');
    r.style.setProperty('--temp-link-background', '#333333');
    r.style.setProperty('--card-background', 'linear-gradient(-45deg, #dec4f2 0%, #bee2f3 100%)');
    r.style.setProperty('--card-fallback-background', '#bee2f3');
  }
}

// Profile Page
function profilePage() {
  if (page != "profile") {
    page = "profile";
    document.getElementById('homePage').style.opacity = '1';
    document.getElementById('homeSection').style.transition = 'all 0.35s ease';
    document.getElementById('homeSection').style.opacity = '0';
    document.getElementById('newsPage').style.opacity = '0';
    document.getElementById('newsPage').style.height = '0vh';
    document.getElementById('newsPage').style.marginTop = '-10vh';
    document.getElementById('profile').style.transition = 'all 0.35s ease';
    document.getElementById('profile').style.opacity = '1';
    document.getElementById('profile').style.height = '88vh';
    document.getElementById('profile').style.marginTop = '0vh';
  }
  else {
    page = "home";
    document.getElementById('homePage').style.opacity = '1';
    document.getElementById('homeSection').style.transition = 'all 0.35s ease';
    document.getElementById('homeSection').style.opacity = '1';
    document.getElementById('newsPage').style.opacity = '0';
    document.getElementById('newsPage').style.height = '0vh';
    document.getElementById('newsPage').style.marginTop = '-10vh';
    document.getElementById('profile').style.transition = 'all 0.35s ease';
    document.getElementById('profile').style.opacity = '0';
    document.getElementById('profile').style.height = '0';
    document.getElementById('profile').style.marginTop = '0vh';
  }
}

// Open & Close Notification Modal
function notiModal(open = false) {
  if (open == false) {
    document.getElementById("notificationsModal").style.transition = "opacity 0.75s ease, top 1.5s ease";
    document.getElementById("notificationsModal").style.marginBottom = "0";
    document.getElementById("notificationsModal").style.top = "-100%";
    document.getElementById("notificationsModal").style.opacity = "0";
  }
  else {
    document.getElementById("notificationsContainer").style.overflowY = "auto";
    document.getElementById("notificationsContainer").style.display = "block";
    document.getElementById("notificationsContainer").style.height = "35vh";
    document.getElementById("notificationsContainer").style.padding = "1% 2%";
    document.getElementById("notificationsModal").style.transition = "opacity 0.5s ease, top 1s ease";
    document.getElementById("notificationsModal").style.height = "fit-content";
    document.getElementById("notificationsModal").style.maxHeight = "80vh";
    document.getElementById("notificationsModal").style.marginTop = "10vh";
    document.getElementById("notificationsModal").style.marginBottom = "10vh";
    document.getElementById("notificationsModal").style.top = "0px";
    document.getElementById("notificationsModal").style.opacity = "1";
  }
}

// Open & Close Profile Modal
function profileModal(open = false, noRevert = false) {
  if (open == false) {
    document.getElementById("profileCustomModal").style.transition = "opacity 0.75s ease, top 1.5s ease";
    document.getElementById("profileCustomModal").style.marginBottom = "0";
    document.getElementById("profileCustomModal").style.top = "-100%";
    document.getElementById("profileCustomModal").style.opacity = "0";
    if (!noRevert) {
      if (iconBeforeEdit != '') {
        currentPFP = iconBeforeEdit;
        loadProfileIcon();
      }
      if (primeColorBeforeEdit != '') {
        document.getElementById("profileMainColor").value = primeColorBeforeEdit;
      }
      if (backColorBeforeEdit != '') {
        document.getElementById("profileBackColor").value = backColorBeforeEdit;
      }
    }
  }
  else {
    iconBeforeEdit = currentPFP;
    primeColorBeforeEdit = document.getElementById("profileMainColor").value;
    backColorBeforeEdit = document.getElementById("profileBackColor").value;
    document.getElementById("profileCustomModal").style.transition = "opacity 0.5s ease, top 1s ease";
    document.getElementById("profileCustomModal").style.height = "fit-content";
    document.getElementById("profileCustomModal").style.maxHeight = "80vh";
    document.getElementById("profileCustomModal").style.marginTop = "10vh";
    document.getElementById("profileCustomModal").style.marginBottom = "10vh";
    document.getElementById("profileCustomModal").style.top = "0px";
    document.getElementById("profileCustomModal").style.opacity = "1";
  }
}
// update profile info
function updateProfileInfo() {
  let newPrimary = document.getElementById("profileMainColor").value;
  let newBackground = document.getElementById('profileBackColor').value;
  let newName = document.getElementById("newProfileName").value;
  let newIcon = loadProfileIcon(true);
  if (newName.length > 0 && newName.trim() != "") {
    let profileSaveData = [newPrimary, newBackground, newName, newIcon];
    profileSaveData = JSON.stringify(profileSaveData);
    localStorage.setItem('profileSaveData', profileSaveData);
    document.getElementById('profileName').innerHTML = `${newName}`;
    document.getElementById('userIconProfile').style.fill = newPrimary;
    document.getElementById('profilebackground').style.background = newBackground;
    profileModal(false, true);
  }
  else {
    showNotification(5000, false, false, true);
  }
}
// load profile info
function loadProfileInfo() {
  let profileSaveData = localStorage.getItem('profileSaveData');
  if (profileSaveData == null) {
    let dataToSave = ['#000000', '#e0e0e0', 'Your Custom Profile', 'regular'];
    dataToSave = JSON.stringify(dataToSave);
    localStorage.setItem('profileSaveData', dataToSave);
    dataToSave = JSON.parse(dataToSave);
    document.getElementById('profileMainColor').value = dataToSave[0];
    document.getElementById('profileBackColor').value = dataToSave[1];
    document.getElementById('profileName').value = dataToSave[2];
    document.getElementById('userIconProfile').style.fill = dataToSave[0];
    document.getElementById('profilebackground').style.background = dataToSave[1];
    document.getElementById('profileName').innerHTML = `${dataToSave[2]}`;
    document.getElementById('newProfileName').value = `${dataToSave[2]}`;
    currentPFP = 'regular';
    loadProfileIcon();
    chooseProfileIcon(currentPFP);
  }
  else {
    let parsedData = JSON.parse(profileSaveData);
    document.getElementById('profileMainColor').value = parsedData[0];
    document.getElementById('profileBackColor').value = parsedData[1];
    document.getElementById('profileName').value = parsedData[2];
    document.getElementById('userIconProfile').style.fill = parsedData[0];
    document.getElementById('profilebackground').style.background = parsedData[1];
    document.getElementById('profileName').innerHTML = `${parsedData[2]}`;
    document.getElementById('newProfileName').value = `${parsedData[2]}`;
    currentPFP = parsedData[3];
    loadProfileIcon();
    chooseProfileIcon(currentPFP);
  }
}
// choose profile icon
function chooseProfileIcon(type) {
  document.getElementById(selectedIconId).classList.remove('selected');
  if (type == "regular") {
    currentPFP = 'regular';
    loadProfileIcon();
    document.getElementById(selectedIconId).classList.add('selected');
  }
  else if (type == "ninja") {
    currentPFP = 'ninja';
    loadProfileIcon();
    document.getElementById(selectedIconId).classList.add('selected');
  }
  else if (type == "suit") {
    currentPFP = 'suit';
    loadProfileIcon();
    document.getElementById(selectedIconId).classList.add('selected');
  }
  else if (type == "astro") {
    currentPFP = 'astro';
    loadProfileIcon();
    document.getElementById(selectedIconId).classList.add('selected');
  }
  else {
    currentPFP = 'regular';
    loadProfileIcon();
    document.getElementById(selectedIconId).classList.add('selected');
  }
}
// load profile icon
function loadProfileIcon(doReturn = false) {
  let profileIcon = document.getElementById('userIconProfile');
  let returnItem = '';
  if (currentPFP == "regular") {
    profileIcon.innerHTML = userSvg;
    selectedIconId = 'userIconNormal';
    returnItem = userSvg;
  }
  else if (currentPFP == 'ninja') {
    profileIcon.innerHTML = ninjaUserSvg;
    selectedIconId = 'ninjaIcon';
    returnItem = ninjaUserSvg;
  }
  else if (currentPFP == 'suit') {
    profileIcon.innerHTML = suitUserSvg;
    selectedIconId = 'suitIcon';
    returnItem = suitUserSvg;
  }
  else if (currentPFP == 'astro') {
    profileIcon.innerHTML = astroUserSvg;
    selectedIconId = 'astroIcon';
    returnItem = astroUserSvg;
  }
  else {
    profileIcon.innerHTML = userSvg;
    selectedIconId = 'userIconNormal';
    returnItem = userSvg;
  }
  if (doReturn == true) {
    return currentPFP;
  }
}
// create new settings save data
function createSettingsSaveData() {
  profileDataArr = [];
  for (i = 0; i < settingsArrLen; i++) {
    profileDataArr.push(false)
  }
  let profileDataArrStr = JSON.stringify(profileDataArr);
  localStorage.setItem('profileSettings', profileDataArrStr);
}
// load profile settings
function loadProfileSettings() {
  let settingsData = localStorage.getItem('profileSettings');
  try {
    profileDataArr = JSON.parse(settingsData);
    if (profileDataArr.length < settingsArrLen) {
      console.log('Settings Data Length Too Small. Creating New Data...');
      createSettingsSaveData();
      console.log('New Settings Data Created.');
    }
    else if (profileDataArr.length > settingsArrLen) {
      console.log('Settings Data Length Too Large. Creating New Data...');
      createSettingsSaveData();
      console.log('New Settings Data Created.');
    }
    else {
      if (profileDataArr[0] == true || profileDataArr[0] == 'true') {
        doAudioEQ = true;
        document.getElementById('audioEqCheckbox').checked = true;
        document.getElementById('eqContainer').style.display = "block";
      }
    }
  }
  catch {
    console.log('Error parsing profile settings. Creating new settings data...');
    profileDataArr = [false];
    let profileDataArrStr = JSON.stringify(profileDataArr);
    localStorage.setItem('profileSettings', profileDataArrStr);
  }
}
loadProfileSettings();
// Open & Close Notification Modal
function mobileAlertModal(open = false) {
  if (open == false) {
    document.getElementById("mobileAlertModal").style.transition = "opacity 0.75s ease, top 1.5s ease";
    document.getElementById("mobileAlertModal").style.marginBottom = "0";
    document.getElementById("mobileAlertModal").style.top = "-100%";
    document.getElementById("mobileAlertModal").style.opacity = "0";
    localStorage.setItem('mobileAlert', 'done');
    newNoti(mobileTitle, mobileBody, 'mobile');
  }
  else {
    if (localStorage.getItem('mobileAlert') != 'done') {
      document.getElementById("mobileAlertModal").style.transition = "opacity 0.5s ease, top 1s ease";
      document.getElementById("mobileAlertModal").style.height = "fit-content";
      document.getElementById("mobileAlertModal").style.maxHeight = "80vh";
      document.getElementById("mobileAlertModal").style.minHeight = "25vh";
      document.getElementById("mobileAlertModal").style.marginTop = "10vh";
      document.getElementById("mobileAlertModal").style.marginBottom = "10vh";
      document.getElementById("mobileAlertModal").style.top = "0px";
      document.getElementById("mobileAlertModal").style.opacity = "1";
    }
    else {
      newNoti(mobileTitle, mobileBody, 'mobile');
    }
  }
}

// Create New Notification Circle
function createNotiCircle(id) {
  let newNoti = document.createElement('div');
  newNoti.id = id;
  newNoti.classList.add('new-noti-circle');
  return newNoti;
}
// Load & Add Notifications Data
function loadNotiData() {
  let notiData = localStorage.getItem('notis');
  let notiDeleteData = localStorage.getItem('notiDelete');
  try {
    notiData = JSON.parse(notiData);
    notiDeleteData = JSON.parse(notiDeleteData);
    for (i = 0; i < notiData.length; i++) {
      notiReads.push(notiData[i]);
      deletedNotis.push(notiDeleteData[i]);
      let itemType = notiData[i];
      if (itemType !== 'new' && itemType !== 'read' || notiDeleteData == 'null' || notiDeleteData == null) {
        console.log('Error: Incorrect Data.');
        console.log('Creating New Save Data...');
        var saveData = [];
        var saveData2 = [];
        for (i = 0; i < allNotis.length; i++) {
          saveData.push('new');
          saveData2.push('show');
        }
        saveData = JSON.stringify(saveData);
        saveData2 = JSON.stringify(saveData2);
        localStorage.setItem('notis', saveData);
        localStorage.setItem('notiDelete', saveData2);
        console.log("Save Data Created.");
      }
      else {
        allNotis[i][2] = itemType;
        notiReads[i] = itemType;
      }
    }
  }
  catch {
    console.log('Error: No Notification Save Data.');
    console.log('Creating Save Data...');
    var saveData = [];
    var saveData2 = [];
    for (i = 0; i < allNotis.length; i++) {
      saveData.push('new');
      saveData2.push('show');
    }
    saveData = JSON.stringify(saveData);
    saveData2 = JSON.stringify(saveData2);
    localStorage.setItem('notis', saveData);
    localStorage.setItem('notiDelete', saveData2);
    console.log("Save Data Created.");
  }
}
loadNotiData();
// Populate Notifications Modal
function populateModal() {
  let notis = allNotis;
  for (i = notis.length - 1; i >= 0; i--) {
    let indexId = i;
    function createNotis() {
      let noti = notis[i];
      let notiName = noti[0];
      let notiInfo = noti[1];
      let notiDisplayType = noti[2];
      let notiItemId = indexId;
      let notiItem = document.createElement('div');
      if (notiDisplayType == "new") {
        totalNotiCircles += 1;
        let newNoti = createNotiCircle(`circle${totalNotiCircles}`);
        notiItem.appendChild(newNoti);
        newNotiNumbers += 1;
        notiItem.classList.add('newNoti');
      }
      else if (notiDisplayType == "read") {
        notiItem.classList.add('readNoti');
      }
      let circleNotiId = `circle${totalNotiCircles}`;
      notiItem.id = notiItemId;
      notiItem.classList.add('noti-item');
      notiItem.classList.add('notiPreview');
      notiItem.onclick = function() {
        if (notiItem.classList.contains('notiPreview')) {
          notiItem.classList.remove("notiPreview");
        }
        else {
          notiItem.classList.add("notiPreview");
        }
        if (notiItem.classList.contains('newNoti')) {
          document.getElementById(circleNotiId).style.display = "none";
          newNotiNumbers -= 1;
          notiItem.classList.remove("newNoti");
          notiItem.classList.add("readNoti");
          allNotis[notiItem.id][2] = "read";
          notiReads[notiItem.id] = "read";
          let newSaveData = JSON.stringify(notiReads);
          localStorage.setItem('notis', newSaveData);
        }
        notiNumber();
      }
      let notiItemTitle = document.createElement('div');
      notiItemTitle.innerHTML = notiName;
      notiItemTitle.classList.add('noti-item-title');
      let notiInfoItem = document.createElement('div');
      notiInfoItem.classList.add('notiInfo');
      notiInfoItem.innerHTML = notiInfo;
      let notiDelete = document.createElement('div');
      notiDelete.classList.add('noti-delete');
      notiDelete.innerHTML = trashSvg;
      notiDelete.onclick = function () {
        notiItem.remove();
        deletedNotis[notiItem.id] = "delete";
        let newSaveData = JSON.stringify(deletedNotis);
        localStorage.setItem('notiDelete', newSaveData);
      }
      notiInfoItem.appendChild(notiDelete);
      notiItem.appendChild(notiItemTitle);
      notiItem.appendChild(notiInfoItem);
      if (deletedNotis[i] == "show") {
        document.getElementById('notificationsContainer').appendChild(notiItem);
      }
    }
    createNotis();
    notiNumber();
  }
}
// Create New Notification
function newNoti(title, desc, special = "none") {
  let notiTitle = title;
  let notiDesc = desc;
  let tempArr = [notiTitle, notiDesc, "new"];
  let tempArr2 = [notiTitle, notiDesc, "read"];
  if (allNotis.includes(tempArr) == false && allNotis.includes(tempArr2) == false) {
    allNotis.push(tempArr);
    let notiId = allNotis.length - 1;
    let newItemIndex = allNotis.length - 1;
    let noti = allNotis[newItemIndex];
    let notiName = noti[0];
    let notiInfo = noti[1];
    let notiDisplayType = noti[2];
    let notiItemId = notiId;
    let notiItem = document.createElement('div');
    notiItem.id = notiItemId;
    notiItem.classList.add('noti-item');
    notiItem.classList.add('notiPreview');
    let notiItemTitle = document.createElement('div');
    notiItemTitle.innerHTML = notiName;
    notiItemTitle.classList.add('noti-item-title');
    let notiInfoItem = document.createElement('div');
    notiInfoItem.classList.add('notiInfo');
    notiInfoItem.innerHTML = notiInfo;
    if (special == "mobile") {
      if (localStorage.getItem('mobileAlertRead') == "true") {
        notiItem.classList.add('readNoti');
      }
      else {
        notiItem.classList.add('newNoti');
        totalNotiCircles += 1;
        let newNoti = createNotiCircle(`circle${totalNotiCircles}`);
        notiItem.appendChild(newNoti);
        newNotiNumbers += 1;
      }
      let circleNotiId = `circle${totalNotiCircles}`;
      notiItem.onclick = function() {
        if (notiItem.classList.contains('notiPreview')) {
          notiItem.classList.remove("notiPreview");
        }
        else {
          notiItem.classList.add("notiPreview");
        }
        if (notiItem.classList.contains('newNoti')) {
          document.getElementById(circleNotiId).style.display = "none";
          newNotiNumbers -= 1;
          notiItem.classList.remove("newNoti");
          notiItem.classList.add("readNoti");
          allNotis[notiItem.id][2] = "read";
          let newSaveData = JSON.stringify(allNotis);
          localStorage.setItem('notis', newSaveData);
          localStorage.setItem('mobileAlertRead', 'true');
        }
        notiNumber();
      }
    }
    else {
      notiItem.classList.add('newNoti');
      totalNotiCircles += 1;
      let newNoti = createNotiCircle(`circle${totalNotiCircles}`);
      notiItem.appendChild(newNoti);
      newNotiNumbers += 1;
      let circleNotiId = `circle${totalNotiCircles}`;
      notiItem.onclick = function() {
        if (notiItem.classList.contains('notiPreview')) {
          notiItem.classList.remove("notiPreview");
        }
        else {
          notiItem.classList.add("notiPreview");
        }
        if (notiItem.classList.contains('newNoti')) {
          document.getElementById(circleNotiId).style.display = "none";
          notiItem.classList.remove("newNoti");
          notiItem.classList.add("readNoti");
          allNotis[notiItem.id][2] = "read";
          let newSaveData = JSON.stringify(allNotis);
          localStorage.setItem('notis', newSaveData);
          newNotiNumbers -= 1;
        }
        notiNumber();
      }
      if (notiDisplayType == 'new') {
        notiItem.classList.add('newNoti');
      } else {
        notiItem.classList.add('readNoti');
      }
    }
    notiItem.appendChild(notiItemTitle);
    notiItem.appendChild(notiInfoItem);
    let element = document.getElementById('notificationsContainer');
    element.insertBefore(notiItem, element.firstChild);
    notiNumber();
  }
}
// Update Notification Numbers Display
function notiNumber() {
  let notiNumberDisplay = document.getElementById('notiNumberDisplay');
  if (newNotiNumbers > 0) {
    notiNumberDisplay.innerHTML = newNotiNumbers;
    notiNumberDisplay.style.display = "inline-flex";
    notiNumberDisplay.style.opacity = "1";
  }
  else {
    notiNumberDisplay.style.display = "none";
    notiNumberDisplay.style.opacity = "0";
  }
}

// See All Songs in A Section
function seemore(section = 'singles') {
  let itemCheck = `${section}Container`;
  let seeItemId = `${section}SeeAll`;
  let item = document.getElementById(itemCheck);
  let seeAllItem = document.getElementById(seeItemId);
  if (item.classList.contains('seemore')) {
    item.classList.remove('seemore');
    seeAllItem.innerHTML = 'See All';
  }
  else {
    item.classList.add('seemore');
    seeAllItem.innerHTML = "Close";
  }
}

// Toggle Settings
function toggleSettings(itemId, itemToggleDisplayId = "NONE", settingsIdx = 0) {
  var itemToggle;
  if (itemToggleDisplayId !== "NONE") {
    itemToggle = document.getElementById(itemToggleDisplayId);
  }
  let itemCheck = document.getElementById(itemId);
  let saveDataStr = localStorage.getItem('profileSettings');
  let saveDataArr = JSON.parse(saveDataStr);
  if (itemCheck.checked) {
    if (itemToggleDisplayId !== "NONE") {
      itemToggle.style.display = "block";
    }
    let newData = itemCheck.checked;
    saveDataArr[settingsIdx] = newData;
    saveDataStr = JSON.stringify(saveDataArr);
    localStorage.setItem('profileSettings', saveDataStr);
    saveDataArr = JSON.parse(saveDataStr);
  }
  else if (!itemCheck.checked) {
    if (itemToggleDisplayId !== "NONE") {
      itemToggle.style.display = "none";
    }
    let newData = itemCheck.checked;
    saveDataArr[settingsIdx] = newData;
    saveDataStr = JSON.stringify(saveDataArr);
    localStorage.setItem('profileSettings', saveDataStr);
    saveDataArr = JSON.parse(saveDataStr);
    if (itemId == "audioEqCheckbox") {
      location.reload();
    }
  }
  setSettingsValues(saveDataArr);
}
// Set new Variable Values
function setSettingsValues(arr) {
  doAudioEQ = arr[0];
  setPageStyle(arr[1]);
}
// load settings
function loadSettings() {
  try {
    savedSettings = localStorage.getItem('profileSettings');
    savedSettings = JSON.parse(savedSettings);
    doAudioEQ = savedSettings[0];
    lightMode = savedSettings[1];
    if (lightMode == 'true' || lightMode == true) {
      setPageStyle('light');
      document.getElementById('lightModeToggle').checked = true;
    }
  } catch {
    console.log('No save data.');
  }
}
loadSettings();

// Remove Play Button on Cards That Arent Available
let cardBtns = document.querySelectorAll('.card-btn-UnAvailable');
for (i = 0; i < cardBtns.length; i++) {
  let cardItem = cardBtns[i];
  let cardBtn = cardItem.querySelector('.card__play-btn');
  cardBtn.style.display = "none";
}
let footers = document.querySelectorAll('.footer-container');
for (i = 0; i < footers.length; i++) {
  let footeritem = footers[i];
  footeritem.innerHTML = footerContent;
}
// Style Lazy Loader Images
let lazyLoadImages = document.querySelectorAll('.extra-card');
for (i = 0; i < lazyLoadImages.length; i++) {
  let image = lazyLoadImages[i].querySelector('img');
  let lazyLoadItem = lazyLoadImages[i];
  lazyLoadItem.classList.add('skeleton-loader');
  image.style.opacity = "0";
  image.style.transition = "opacity 0.4s ease";
  image.addEventListener('load', function() {
    if (image.complete) {
      image.style.opacity = "1";
      lazyLoadItem.style.transition = "all 0.4s ease";
      lazyLoadItem.classList.remove('skeleton-loader');
    }
  });
}