// ============================================
// 1. VARIABLES: undefined, null, var, let, const
// ============================================

console.log("=== UNDEFINED ===");
let emptyVariable;
console.log(emptyVariable); // undefined
console.log(typeof emptyVariable); // "undefined"

// A function that doesn't return anything
function noReturn() {
  console.log("No return statement");
}
console.log(noReturn()); // undefined

console.log("\n=== NULL ===");
let nothingHere = null;
console.log(nothingHere); // null
console.log(typeof nothingHere); // "object" (JavaScript quirk)

const user = null; // Intentionally no data
console.log(`User: ${user}`); // null

console.log("\n=== VAR (Avoid it) ===");
var oldStyle = "Don't use this";
console.log(oldStyle);

// var behaves unpredictably
if (true) {
  var leaked = "This variable 'leaks' outside the block";
}
console.log(leaked); // Works (shouldn't)

console.log("\n=== LET ===");
let mutable = "I can change";
mutable = "Changed";
console.log(mutable);

// let is limited to its block
if (true) {
  let blockScoped = "Only here";
  console.log(blockScoped); // Works
}
// console.log(blockScoped); // Error: blockScoped is not defined

console.log("\n=== CONST ===");
const immutable = "I cannot be reassigned";
console.log(immutable);

// But I can mutate objects and arrays
const person = { name: "Angel", age: 23 };
person.age = 24; // This works
console.log(person);

const skills = ["React", "TypeScript"];
skills.push("Node.js"); // This works
console.log(skills);

// This DOES cause an error:
// immutable = "New value"; // TypeError: Assignment to constant variable

console.log("\n=== QUICK COMPARISON ===");
console.log("undefined:", typeof undefined); // undefined
console.log("null:", typeof null); // object (historical bug)
console.log("undefined == null:", undefined == null); // true
console.log("undefined === null:", undefined === null); // false
