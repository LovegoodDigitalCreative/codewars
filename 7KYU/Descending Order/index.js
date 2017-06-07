function descendingOrder(n){
  var digits = (""+n).split("").sort(function(a, b){return b-a});
  digits = digits.join("");
  return Number(digits);
}

var result = descendingOrder(39848784);
console.log(result);
