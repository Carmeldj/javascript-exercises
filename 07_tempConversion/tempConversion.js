const convertToCelsius = function (degree) {
  return round((degree - 32) * (5 / 9), 0);
};

const convertToFahrenheit = function (degree) {
  return round(degree * (9 / 5) + 32, 1);
};

function round(value, precision) {
  var multiplier = Math.pow(10, precision || 1);
  return Math.round(value * multiplier) / multiplier;
}

console.log(convertToFahrenheit(0));
console.log(convertToCelsius(32));
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
