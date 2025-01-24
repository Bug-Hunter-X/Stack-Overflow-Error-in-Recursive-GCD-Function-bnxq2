function foo(a, b) {
  if (a === b) {
    return true; 
  } else if (a > b) {
    return foo(a - b, b);
  } else {
    return foo(a, b - a);
  }
}

console.log(foo(10, 2)); // Correctly returns false
console.log(foo(10, 5)); // Correctly returns true
console.log(foo(10, 0)); // Stack Overflow error because of the lack of a base case!