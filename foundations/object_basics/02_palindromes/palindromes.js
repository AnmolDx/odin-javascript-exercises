const palindromes = function (string) {
    let alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789"
    let lowerStr = string.toLowerCase()
    let arrOfStr = [...lowerStr]
    let filteredStr = arrOfStr.filter((char) => alphanumerical.includes(char))
                    .join("")

    let reversedString = filteredStr.split("").reverse().join("")

    return filteredStr === reversedString


};

// Do not edit below this line
module.exports = palindromes;
