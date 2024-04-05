const removeFromArray = function (a, ...args) {
  // let b = [];
  for (i = 0; i < a.length; i++) {
    for (const arg of args) {
      if (a[i] == arg) {
        a.splice(i, 1);
      }
    }
  }
  console.log(a.length);
  return a;
};

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 3, 7, 10));

// Do not edit below this line
module.exports = removeFromArray;
