var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var degree = document.querySelector('select[name=degrees]');
var defaultColor1 = '#0000ff';
var defaultColor2 = '#ff0000';
var defaultDegree = '90';

console.log(degree);

function setGradientColors(firstColor, secondColor, deg) {
  body.style.background =
    'linear-gradient(' + deg + 'deg,' + firstColor + ', ' + secondColor + ')';
  css.textContent = body.style.background + ';';
}

function setGradient() {
  var deg = degree.options[degree.selectedIndex].value;
  setGradientColors(color1.value, color2.value, deg);
}

function startup() {
  setGradientColors(defaultColor1, defaultColor2, defaultDegree);
  color1.value = defaultColor1;
  color2.value = defaultColor2;
  color1.addEventListener('input', setGradient);
  color2.addEventListener('input', setGradient);
  degree.addEventListener('change', setGradient);
}

startup();
