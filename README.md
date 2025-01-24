# Stack Overflow in Recursive GCD Function

This repository demonstrates a common error in recursive JavaScript functions: a missing base case. The `foo` function is designed to calculate the greatest common divisor (GCD) using Euclid's algorithm. However, the current implementation lacks a base case to handle when the second argument (`b`) becomes 0. This leads to infinite recursion and a stack overflow error.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and observe the flawed GCD function.
3. Run `bug.js`. You will see the stack overflow error when calling `foo(10, 0)`.
4. Open `bugSolution.js` to see the correct implementation.

## Solution

The solution, shown in `bugSolution.js`, adds a base case: when `b` is 0, it returns `a`. This handles the termination condition of the recursion, preventing the stack overflow.