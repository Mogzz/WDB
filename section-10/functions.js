function isEven(x) {
  return x % 2 === 0;
}

function factiorial(x) {
  var total = 1;
  //multiply total by each digit until we hit our passed in value
  for (var i = 2; i <= x; i++) {
    total = total * i;
  }
  return total;
}

function kebabToSnake(input) {
  var re = /-/g;
  var result = input.replace(re, "_");
  return result;
}