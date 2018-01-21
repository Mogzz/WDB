//PRINT REVERSE ORDER

var array = [1, 2, 3, 4];

function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

//RETURN TRUE IF ALL ELEMENTS OF ARRAY IDENTICLE.

function isUniform(array) {
  var first = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== first) {
      return false;
    }
  }
  return true;
}

// *** sumArray() ***

function sumArray(index) {
  var sum = 0;
  for (var i = 0; i < index.length; i++) {
    sum = sum + index[i];
  }
  console.log(sum);
  return sum;
}

//return max number in ARRAY

function max(index) {
  var max = index[0];
  for (var i = 0; i < index.length; i++) {
    if (index[i] > max) {
      max = index[i];
    }
  }
  return max;
}