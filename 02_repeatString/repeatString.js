const repeatString = function (str, nbr) {
  let result = "";

  if (nbr >= 0) {
    for (let i = 0; i < nbr; i++) {
      result = result.concat(str);
    }
    return result;
  } else return "ERROR";
};
console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
