function changeGraphics(idx) {
  let item;
  item = graphicsOptions[idx];
  if (item == 'true') {
    item = 'false';
  } else {
    item = 'true';
  }
  graphicsOptions[idx] = item;
}
function updateGraphics() {
  if (graphicsOptions[0] == 'true') {
    // do something
  }
}