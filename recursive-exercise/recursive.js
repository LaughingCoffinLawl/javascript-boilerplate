var output = sumRange(10);
console.log(output);

function sumRange(num) {
  if (num == 1) return 1;

  return num + sumRange(num - 1);
}

var output = power(2, 4);
console.log(output);

function power(base, exponent) {
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
}

var output = factorial(5);
console.log(output);

function factorial(num) {
  if (num == 1) return 1;
  return num * factorial(num - 1);
}
