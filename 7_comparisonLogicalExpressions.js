let x = 75;

/*True Logs*/
console.log(x == 75);   // x is equal to 75
console.log(x === 75);  // x is strictly equal to 75
console.log(x != 5);    // x is not equal to 5
console.log(x !== 5);   // x is not strictly equal to 5
console.log(x > 5);     // x is greater than 5
console.log(x < 100);   // x is less than 100
console.log(x >= 75);   // x is greater than or equal to 75
console.log(x <= 100);  // x is less than or equal to 100
console.log(x && true); // x is truthy, and true is true
console.log(x || false);// x is truthy, so this evaluates to true
console.log(!(x === 5));// x is not equal to 5, so the negation of false is true

/*False Logs*/
console.log(x == 5);    // x is not equal to 5
console.log(x === 5);   // x is not strictly equal to 5
console.log(x != 75);   // x is equal to 75, so this evaluates to false
console.log(x !== 75);  // x is strictly equal to 75, so this evaluates to false
console.log(x > 100);   // x is not greater than 100
console.log(x < 5);     // x is not less than 5
console.log(x >= 100);  // x is not greater than or equal to 100
console.log(x <= 5);    // x is not less than or equal to 5
console.log(x && false);// x is truthy, but false is falsy, so the result is false
console.log(x || false);// x is truthy, but OR with false still gives the truthy value (x), no issue here
console.log(!(x === 75));// x is equal to 75, so the negation of true is false
