// ES5

function add(value) {
  return function(x) {
    return x + value;
  }
}

function subtract(value) {
  return function(x) {
    return x - value;
  }
}

function multiply(value) {
  return function(x) {
    return x * value;
  }
}

function multi(addValue) {
  return function(subtractValue) {
    return function(multiplierValue) {
      return function(value) {
        const adder = add(addValue);
        const subtracter = subtract(subtractValue);
        const multiplier = multiply(multiplierValue);

        return adder(subtracter(multiplier(value)));
      }
    }
  }
}

// Même example, arrow function

const add = value => x + value;
const subtract = value => x - value;
const multiply = value => x * value;

const multi = addValue => subtractValue => multiplierValue => x => {
  const adder = add(addValue);
  const subtracter = subtract(subtractValue);
  const multiplier = multiply(multiplierValue);

  return adder(subtracter(multiplier(x)));
}

const r = multi(10)(2)(3)(5);
// 5*3-2+10

console.log('Result', r);
