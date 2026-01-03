// ============================================
// 4. TYPE CONVERSION: Explicit Conversions
// ============================================

console.log("=== CONVERT TO NUMBER ===");

// Number() - Strict conversion
console.log(Number("42")); // 42
console.log(Number("42.5")); // 42.5
console.log(Number("abc")); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN

// parseInt() - Extracts integer
console.log(parseInt("42")); // 42
console.log(parseInt("42.5")); // 42 (no decimals)
console.log(parseInt("16px")); // 16 (useful for CSS!)
console.log(parseInt("px16")); // NaN (must start with number)
console.log(parseInt("42", 10)); // 42 (second param: base/radix)

// parseFloat() - Allows decimals
console.log(parseFloat("42.5")); // 42.5
console.log(parseFloat("42.5px")); // 42.5
console.log(parseFloat("3.14159")); // 3.14159

// Unary + (quick trick)
console.log(+"42"); // 42
console.log(+"42.5"); // 42.5
console.log(+"abc"); // NaN

console.log("\n=== REAL-WORLD USE CASES ===");

// Extract CSS values
const cssHeight = "150px";
const heightAsNumber = parseInt(cssHeight);
console.log(heightAsNumber + 50); // 200

// User input is always a string
const userInput = "25";
const age = Number(userInput);
console.log(age + 5); // 30 (sum, not concatenation)

// Price from API
const priceString = "19.99";
const price = parseFloat(priceString);
console.log("Total:", price * 2); // 39.98

console.log("\n=== CONVERT TO STRING ===");

console.log(String(42)); // "42"
console.log(String(42.5)); // "42.5"
console.log(String(true)); // "true"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"

// Template literals (modern and readable)
const num = 42;
console.log(`The number is ${num}`); // "The number is 42"

// toString() (on objects)
const obj = { id: 1 };
console.log(obj.toString()); // "[object Object]"

console.log("\n=== CONVERT TO BOOLEAN ===");

console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("hello")); // true
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean([])); // true (arrays are truthy)
console.log(Boolean({})); // true (objects are truthy)

// Double negation (trick)
console.log(!!1); // true
console.log(!!0); // false
console.log(!!"text"); // true

console.log("\n=== ARRAY CONVERSION ===");

console.log(String([1, 2, 3])); // "1,2,3"
console.log(Number([42])); // 42 (array with single number)
console.log(Number([1, 2])); // NaN (multiple elements)
console.log(Number([])); // 0 (empty array)

console.log("\n=== IN REACT (EXAMPLES) ===");

// Validate user input
function handleInput(value) {
  const numValue = Number(value);
  if (Number.isNaN(numValue)) {
    console.log("❌ Invalid input");
    return;
  }
  console.log("✅ Valid number:", numValue);
}

handleInput("42"); // ✅
handleInput("abc"); // ❌

// Formats for display
const quantity = 5;
console.log(`You have ${quantity} item${quantity !== 1 ? "s" : ""}`);

console.log("\n=== SUMMARY OF METHODS ===");
console.log("Number():     For simple conversions to number");
console.log("parseInt():   To extract integers from strings");
console.log("parseFloat(): To extract decimals");
console.log("String():     To convert to string");
console.log("Boolean():    To convert to boolean");
console.log("Template literals: The modern and clear way");
