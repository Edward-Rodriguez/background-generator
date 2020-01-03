var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var degree = document.querySelector('select[name=degrees]');
var randomButton = document.querySelector('#randomButton');
var copyButton = document.getElementById('copyButton');
var copiedText = document.querySelector('span');
var defaultColor1 = '#0000ff';
var defaultColor2 = '#ff0000';
var defaultDegree = '90';
const maxRGBValue = '255';

function setGradientColors(firstColor, secondColor, deg) {
  body.style.background =
    'linear-gradient(' + deg + 'deg,' + firstColor + ', ' + secondColor + ')';
  css.textContent = body.style.background + ';';
}

function setGradient() {
  var deg = degree.options[degree.selectedIndex].value;
  setGradientColors(color1.value, color2.value, deg);
}

// returns random hex string
function getRandomHexColor() {
  return (
    '#' +
    (Math.random().toString(16) + '000000')
      .slice(2, 8)
      .toUpperCase()
      .slice(-6)
  );
}

function generateRandomColors() {
  color1.value = getRandomHexColor();
  color2.value = getRandomHexColor();
  setGradient();
}

function textTransition() {
  copiedText.style.cssText = 'visibility: visible; opacity: 1; ';
}

function resetTransition() {
  if (copiedText.style.visibility === 'visible') {
    copiedText.style.cssText =
      'visibility: hidden; opacity: 0; transition: all 3s';
  }
}

function copyToClipboard() {
  css.textContent.select();
  css.textContent.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand('copy');
  alert(css.textContent);
}

function startup() {
  setGradientColors(defaultColor1, defaultColor2, defaultDegree);
  color1.value = defaultColor1;
  color2.value = defaultColor2;
  color1.addEventListener('input', setGradient);
  color2.addEventListener('input', setGradient);
  degree.addEventListener('change', setGradient);
  randomButton.addEventListener('click', generateRandomColors);
  copyButton.addEventListener('click', () => {
    textTransition;
    copyToClipboard;
  });
  copyButton.addEventListener('mouseleave', resetTransition);
}

startup();
