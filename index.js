const localeBorder = {
  topLeft: document.getElementById("Border-top-left"),
  topRight: document.getElementById("Border-top-right"),
  bottomRight: document.getElementById("Border-bottom-right"),
  bottomLeft: document.getElementById("Border-bottom-left"),
};

function handleInput() {
  borderTopLeft();
  borderTopRight();
  borderBottomRight();
  borderBottomLeft();

  showingBorderValues();
}

function borderTopLeft() {
  let topLeft = localeBorder.topLeft.value;

  if (!topLeft) topLeft = 0;

  document.getElementById("Border").style.borderTopLeftRadius = `${topLeft}px`;

  return topLeft;
}

function borderTopRight() {
  let topRight = localeBorder.topRight.value;

  if (!topRight) topRight = 0;

  document.getElementById(
    "Border"
  ).style.borderTopRightRadius = `${topRight}px`;

  return topRight;
}

function borderBottomRight() {
  let bottomRight = localeBorder.bottomRight.value;

  if (!bottomRight) bottomRight = 0;

  document.getElementById(
    "Border"
  ).style.borderBottomRightRadius = `${bottomRight}px`;

  return bottomRight;
}

function borderBottomLeft() {
  let bottomLeft = localeBorder.bottomLeft.value;

  if (!bottomLeft) bottomLeft = 0;

  document.getElementById(
    "Border"
  ).style.borderBottomLeftRadius = `${bottomLeft}px`;

  return bottomLeft;
}

function showingBorderValues() {
  let showingBorderValues = document.getElementById("showingBorderValues");

  showingBorderValues.value = `Border Radius: ${borderTopLeft()}px ${borderTopRight()}px ${borderBottomRight()}px ${borderBottomLeft()}px`;
}

function copyText() {
  let copyText = document.getElementById("showingBorderValues");

  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");
}
