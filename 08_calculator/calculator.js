const add = function(...args) {
  let numberArr = [...args];
  if(numberArr == false) return 0;
  let total = numberArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  return total;
};

const subtract = function(...args) {
  let numberArr = [...args]
  if(numberArr == false) return 0;
  let total = numberArr.reduce((accumulator, currentValue) => accumulator - currentValue);
  return total;
	
};

const sum = function(num) { 
  if(typeof num != 'object') return 0;
  if(num.length == 0) return 0;
  let total = num.reduce((accumulator, currentValue) => accumulator + currentValue);
  return total;
};

const multiply = function(num) {
  if(typeof num != 'object') return 0;
  if(num.length == 0) return 0;
  let total = num.reduce((accumulator, currentValue) => accumulator * currentValue);
  return total;

};

const power = function(...args) {
  let numberArr = [...args];
  if(numberArr == false) return 0;
  let total = numberArr.reduce((accumulator, currentValue) => accumulator ** currentValue);
  return total;
	
};

const factorial = num => {
  let total = 1;
  for (let i=1; i<=num; i++){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
