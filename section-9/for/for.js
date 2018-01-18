for (var i = -10; i < 20; i++) {
  console.log(i);
}

//all even numbers between 10 and 40

for (var x = 10; x < 41; x++) {
  if (x % 2 === 0) {

    console.log(x);
  }
}

//all odd numbers between 300 and 333

for (var x = 300; x < 334; x++) {
  if (x % 2 !== 0) {

    console.log(x);
  }
}

//all numbers divisible by 5 and 3  between 5 and 50

for (var x = 5; x <= 50; x++) {
  if (x % 5 === 0 && x % 3 === 0) {
    console.log(x);
  }
}