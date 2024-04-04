const reverseString = function (str) {
  //   let a = str.split(" ");
  //   let s1 = "";
  //   let s2 = "";
  //   for (let i = 0; i < a.length; i++) {
  //     a[i] = a[i].split("").reverse();
  //   }
  //   a = a.reverse();
  //   for (let i = 0; i < a.length; i++) {
  //     s1 = a[i].join("");
  //     s2 = s2 + s1 + " ";
  //   }
  //   s2 = s2.slice(0, -1);
  //   return s2;
  return str.split("").reverse().join("");
};

console.log(reverseString("hello world"));
// Do not edit below this line
module.exports = reverseString;
