var update = 0; // 0 = not updated, 1 = updated
var updateReason = 1; // 2 = bug, 1 = new feature, 3 = Editing Code
var checkUpdateReason = localStorage.getItem("updateReason");
if (checkUpdateReason == null || checkUpdateReason == "") {
  if (updateReason == 1) {
    localStorage.setItem("updateReason", "1");
  } else if (updateReason == 2) {
    localStorage.setItem("updateReason", "2");
  } else if (updateReason == 3) {
    localStorage.setItem("updateReason", "3");
  }
} else {
  if (updateReason == 1) {
    localStorage.setItem("updateReason", "1");
  } else if (updateReason == 2) {
    localStorage.setItem("updateReason", "2");
  } else if (updateReason == 3) {
    localStorage.setItem("updateReason", "3");
  }
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function checkUpdate() {
  let cookieValue = getCookie('adminLog');
  if (update == 1 && cookieValue != '1') {
    localStorage.setItem("updatingWebiste", "yes");
    window.location.href = "/updating.html";
  } else if (update == 0) {
    localStorage.setItem("updatingWebiste", "no");
  }
}
checkUpdate();