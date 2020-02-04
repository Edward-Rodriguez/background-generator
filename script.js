/**
 * Gradient background generator.
 *
 * Choose two colors and a degree for a background gradient and
 * generate corresponding css with copy option
 *
 * @link  https://edward-rodriguez.github.io/background-generator/
 * @author Edward Rodriguez
 * @since 1/4/20
 * */

var _ = require('lodash');
console.log(_);

var array = [1, 2, 3, 4];
console.log('answer:', _.without(array, 3));

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

// set gradient background with given colors and degree
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

// reset COPIED text to invisible
function resetTransition() {
  if (copiedText.style.visibility === 'visible') {
    copiedText.style.cssText =
      'visibility: hidden; opacity: 0; transition: all 3s';
  }
}

function copyToClipboard() {
  var temp = document.createElement('textarea');
  document.body.appendChild(temp);
  temp.value = css.textContent;
  temp.select();
  temp.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand('copy');
  document.body.removeChild(temp);
  copiedText.style.cssText = 'visibility: visible; opacity: 1; ';
}

function startup() {
  setGradientColors(defaultColor1, defaultColor2, defaultDegree);
  color1.value = defaultColor1;
  color2.value = defaultColor2;
  color1.addEventListener('input', setGradient);
  color2.addEventListener('input', setGradient);
  degree.addEventListener('change', setGradient);
  randomButton.addEventListener('click', generateRandomColors);
  copyButton.addEventListener('click', copyToClipboard);
  copyButton.addEventListener('mouseleave', resetTransition);
}

startup();
