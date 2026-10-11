const convertToCelsius = function(fah) {
  let celsius = Math.round((fah - 32)*(5/9)*10)/10
  return celsius
};

const convertToFahrenheit = function(cel) {
  let fahrenheit = Math.round(((cel*9)/5 + 32)*10)/10
  return Number(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
