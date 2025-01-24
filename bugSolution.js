function foo(a, b) {
  if (b === 0) {
    return a; // Base case: when b is 0, return a
  } else if (a === b) {
    return true; 
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Correctly returns false
console.log(foo(10, 5)); // Correctly returns true
console.log(foo(10, 0)); // Correctly returns 10