/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.
Before fixing, I ran the script to observe the unexpected outputs:

Original Outputs:

The result is: 3        ← Correct
This is valid!          ←  Unexpected (should be "NOT valid")
Total Age: 255          ← Unexpected (should be 30)

Explanation:

- The first line worked because the "-" operator forces implicit numeric conversion.
- The second output was wrong because Boolean("false") is TRUE (any non-empty string is truthy).
- The third output was wrong because "25" + 5 concatenated as a string instead of performing addition.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// 1️ "-" operator automatically converts "5" to a number (implicit conversion)
let result = "5" - 2;
console.log("The result is: " + result); // Output: 3

// 2️ Boolean("false") is TRUE because any non-empty string is truthy
// FIX: Convert the string "false" into a real boolean by checking its content
let isValidString = "false";
let isValid = (isValidString === "true"); // Only "true" becomes true
if (isValid) {
  console.log("This is valid!");
} else {
  console.log("This is NOT valid!"); // Correct output now
}

// 3️ "25" + 5 results in "255" (string concatenation)
// FIX: Convert "25" to a number before adding
let age = "25";
let totalAge = Number(age) + 5; // 25 + 5 = 30
console.log("Total Age: " + totalAge); // Output: 30


// Example 1 – Implicit type conversion
console.log("Example 1: Implicit Conversion");

let implicitExample = "10" * 2; // JavaScript converts "10" (string) to 10 (number)
console.log("Operation: 10 * 2");
console.log("Result:", implicitExample);
console.log("Type after conversion:", typeof implicitExample);

// Example 2 – Explicit type conversion
console.log("Example 2: Explicit Conversion");

let userInput = "100"; // user input is text (string)
console.log("Before conversion:", userInput, "Type:", typeof userInput);

let explicitExample = Number(userInput); // we convert it to a number
console.log("After conversion:", explicitExample, "Type:", typeof explicitExample);

// Example 3 – Edge case (undefined → NaN)
console.log("Example 3: Edge Case");

let maybeUndefined; // variable created but not assigned (undefined)
console.log("Original value:", maybeUndefined, "Type:", typeof maybeUndefined);

let convertedValue = Number(maybeUndefined); // converting undefined to number gives NaN
console.log("After conversion:", convertedValue, "Type:", typeof convertedValue);
console.log("Is NaN?", Number.isNaN(convertedValue));
