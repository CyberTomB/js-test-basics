// Write a function that uses the addition operator to add two numbers together
function add(x, y) {
   return x + y
}

// Write a function that returns the Cubed value of x
function cubed(x) {
   return x * x * x
}

// Write a function that will divide two numbers, and will format the returned value
// as a whole number. (No Decimals)
function divideWholey(x, y) {
   return Math.floor(x / y)
}

// Write a function that takes in a number and determines if it is even. 
// It should return a boolean value - true if it is even, false if it is odd.
function isEven(num) {
   return 0 == num % 2
}


// Given 2 numbers, generate a random number within that range. 
// Make it inclusive so that the starting and ending numbers are part 
// of the range.HINT ** Utilize Javascript's Math Class (To the Google!)
function numberGenerator(num1, num2) {
   min = Math.ceil(num1)
   max = Math.floor(num2)
   return Math.floor(Math.random() * (max - min + 1) + min)
}