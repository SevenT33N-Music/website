// CHECK THAT PAGE HAS FINISHED LOADING, THAN GENERATE NEWS
document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    loadNews();
  }
}

// LOAD THE NEWS
function loadNews() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {readAndParseXMLData(this);}
  xhttp.open("GET", "/news.xml");
  xhttp.send();
}
function readAndParseXMLData(xml) {
  const xmlDoc = xml.responseXML;
  const data = xmlDoc.getElementsByTagName("item");
  let p = "";
  for (let i = 0; i < data.length; i++) {
    p += "<h2>" +
      data[i].getElementsByTagName("header")[0].childNodes[0].nodeValue +
      "</h2><br><p>" +
      data[i].getElementsByTagName("info")[0].childNodes[0].nodeValue +
      "</p><br><br><h6>" +
      data[i].getElementsByTagName("time")[0].childNodes[0].nodeValue +
      "</h6><br><hr><br>";
  }
  let news = document.getElementById("newsFromXMLFile");
  news.innerHTML = p;
  news.style.opacity = "1";
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".news").classList.add("loaded");
}