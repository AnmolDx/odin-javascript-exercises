const convertToCelsius = function(f) {
  let celsius = ((f-32)*5/9)*10;
  return Math.round(celsius)/10
};

const convertToFahrenheit = function(c) {
  let fahrenheit = ((c*9/5)+32)*10;
  return Math.round(fahrenheit)/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
