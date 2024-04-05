const removeFromArray = function (a, ...args) {
  let b = [];
  for (i = 0; i < a.length; i++) {
    if (!args.includes(a[i])) {
      b.push(a[i]);
    }
  }
  return b;
};

console.log(removeFromArray([1, 2, 3, 4, 3, 3], 3, 1));

// Do not edit below this line
module.exports = removeFromArray;
