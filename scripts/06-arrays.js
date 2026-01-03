// ============================================
// 6. ARRAYS: Common Methods and Behaviors
// ============================================

console.log("=== ITERATION METHODS ===");

const numbers = [1, 2, 3, 4, 5];

// map() - transforms each element
const doubled = numbers.map(num => num * 2);
console.log("map:", doubled); // [2, 4, 6, 8, 10]

// filter() - returns elements that meet condition
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter:", evenNumbers); // [2, 4]

// find() - returns the FIRST element that meets condition
const firstEven = numbers.find(num => num % 2 === 0);
console.log("find:", firstEven); // 2

// findIndex() - returns the index of the element
const indexEven = numbers.findIndex(num => num % 2 === 0);
console.log("findIndex:", indexEven); // 1

// reduce() - accumulates into a final value
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce (sum):", sum); // 15

console.log("\n=== REDUCE: ADVANCED EXAMPLE ===");

// Count occurrences
const words = ["apple", "banana", "apple", "cherry", "apple"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log("Count:", wordCount); // { apple: 3, banana: 1, cherry: 1 }

console.log("\n=== ADDITION/REMOVAL METHODS ===");

let fruits = ["apple", "banana"];

// push() - adds to the end, MODIFIES the original array
fruits.push("cherry");
console.log("after push:", fruits); // ["apple", "banana", "cherry"]

// pop() - removes from the end, MODIFIES
let lastFruit = fruits.pop();
console.log("pop returns:", lastFruit); // "cherry"
console.log("after pop:", fruits); // ["apple", "banana"]

// unshift() - adds to the beginning, MODIFIES
fruits.unshift("mango");
console.log("after unshift:", fruits); // ["mango", "apple", "banana"]

// shift() - removes from the beginning, MODIFIES
let firstFruit = fruits.shift();
console.log("shift returns:", firstFruit); // "mango"
console.log("after shift:", fruits); // ["apple", "banana"]

console.log("\n=== NON-MUTATING METHODS (IMMUTABLE) ===");

const original = [1, 2, 3];

// slice() - copies a portion
const sliced = original.slice(1, 3);
console.log("slice(1, 3):", sliced); // [2, 3]
console.log("original unchanged:", original); // [1, 2, 3]

// concat() - combines arrays
const combined = [0].concat(original, [4]);
console.log("concat:", combined); // [0, 1, 2, 3, 4]

// join() - converts to string
const joined = original.join("-");
console.log("join('-'):", joined); // "1-2-3"

console.log("\n=== SPLICE (MODIFIES THE ORIGINAL) ===");

let items = ["a", "b", "c", "d"];
// splice(start, how many to remove, elements to add)
let removed = items.splice(1, 2, "x", "y");
console.log("Removed:", removed); // ["b", "c"]
console.log("Modified array:", items); // ["a", "x", "y", "d"]

console.log("\n=== SPECIAL BEHAVIOR: UNDEFINED INDICES ===");

let sparse = [];
sparse[0] = "first";
sparse[3] = "fourth"; // Creates empty slots at [1] and [2]

console.log("Array:", sparse);
console.log("Length:", sparse.length); // 4
console.log("Index 1:", sparse[1]); // undefined
console.log("Index 2:", sparse[2]); // undefined

// Iteration is smart
sparse.forEach((item, index) => {
  console.log(`Index ${index}:`, item);
});
// Only iterates over defined elements

console.log("\n=== SEARCH METHODS ===");

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" }
];

// includes() - returns boolean
console.log(numbers.includes(3)); // true
console.log(numbers.includes(10)); // false

// some() - returns true if AT LEAST ONE meets condition
const hasEven = numbers.some(num => num % 2 === 0);
console.log("Has even:", hasEven); // true

// every() - returns true if ALL meet condition
const allPositive = numbers.every(num => num > 0);
console.log("All positive:", allPositive); // true

// indexOf() - returns index or -1
console.log("Index of 3:", numbers.indexOf(3)); // 2
console.log("Index of 10:", numbers.indexOf(10)); // -1

console.log("\n=== COMMON IN REACT ===");

const users = [
  { id: 1, name: "Angel" },
  { id: 2, name: "Maria" },
  { id: 3, name: "Juan" }
];

// Render list
const usersList = users.map(user => `<li>${user.name}</li>`);
console.log("JSX:", usersList);

// Filter active users
const activeUsers = users.filter(user => user.id !== 2);
console.log("Active:", activeUsers);

// Search by ID
const user = users.find(u => u.id === 2);
console.log("Found user:", user);

console.log("\n=== COMPARISON: MUTATION vs IMMUTABILITY ===");

const arr = [1, 2, 3];

// ❌ Mutation (avoid in React)
arr.push(4);
console.log("With push:", arr);

// ✅ Immutable (preferred in React)
const newArr = [...arr, 5];
console.log("With spread:", newArr);

console.log("\n=== CHECKLIST ===");
console.log("✅ map() to transform");
console.log("✅ filter() to filter");
console.log("✅ find() to search for one");
console.log("✅ reduce() to accumulate");
console.log("✅ Prefer immutable methods in React");
console.log("✅ Avoid push(), pop(), splice() inside React");
