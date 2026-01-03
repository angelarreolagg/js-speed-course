// ============================================
// 7. DESTRUCTURING & SPREAD OPERATOR
// ============================================

console.log("=== ARRAY DESTRUCTURING ===");

const colors = ["red", "green", "blue"];

// Without destructuring
const first = colors[0];
const second = colors[1];
console.log(first, second);

// With destructuring (much cleaner)
const [red, green, blue] = colors;
console.log(red, green, blue); // red green blue

// Skip elements
const [primaryColor, , tertiaryColor] = colors;
console.log(primaryColor, tertiaryColor); // red blue

// Rest operator
const [first2, ...rest] = colors;
console.log(first2); // "red"
console.log(rest); // ["green", "blue"]

// Default value
const [color1, color2, color3, color4 = "yellow"] = colors;
console.log(color4); // "yellow"

console.log("\n=== OBJECT DESTRUCTURING ===");

const user = {
  id: 1,
  name: "Angel",
  email: "angel@example.com",
  age: 23
};

// Without destructuring
const name = user.name;
const userEmail = user.email;
console.log(name, userEmail);

// With destructuring
const { id, name: userName, email: userEmailDest } = user;
console.log(id, userName, userEmailDest);

// Rest in objects
const { id: userId, ...rest2 } = user;
console.log(userId); // 1
console.log(rest2); // { name, email, age }

// Default value
const { role = "user" } = user;
console.log(role); // "user"

// Rename variables
const { age: userAge } = user;
console.log(userAge); // 23

console.log("\n=== NESTED DESTRUCTURING ===");

const profile = {
  user: {
    name: "Angel",
    location: {
      city: "Mexico City",
      country: "Mexico"
    }
  }
};

// Deep destructuring
const { user: { name: nestedName, location: { city } } } = profile;
console.log(nestedName, city);

console.log("\n=== DESTRUCTURING IN FUNCTIONS ===");

// Simple parameters
const printUser = ({ name, age }) => {
  console.log(`${name} is ${age} years old`);
};

printUser(user); // Angel is 23 years old

// With default values
const createUser = ({ name, role = "user" } = {}) => {
  return { name, role };
};

console.log(createUser({ name: "Maria" })); // { name: "Maria", role: "user" }

console.log("\n=== SPREAD OPERATOR (...) WITH ARRAYS ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Copy array
const arrCopy = [...arr1];
console.log(arrCopy); // [1, 2, 3]

// Combine arrays
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Add elements
const withExtra = [0, ...arr1, 4];
console.log(withExtra); // [0, 1, 2, 3, 4]

// IMPORTANT: Spread creates shallow copy
const nested = [[1, 2], [3, 4]];
const nestedCopy = [...nested];
nestedCopy[0][0] = 999;
console.log(nested[0][0]); // 999 (changed original, subarrays share reference)

console.log("\n=== SPREAD OPERATOR WITH OBJECTS ===");

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Copy object
const objCopy = { ...obj1 };
console.log(objCopy); // { a: 1, b: 2 }

// Combine objects
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Overwrite properties (last one wins)
const updated = { ...obj1, a: 999 };
console.log(updated); // { a: 999, b: 2 }

// Add properties
const extended = { ...obj1, role: "admin" };
console.log(extended); // { a: 1, b: 2, role: "admin" }

console.log("\n=== IN REACT: PROPS ===");

// Pass all props to child component
function ParentComponent(props) {
  const { name, ...restProps } = props;
  
  // Only pass the rest
  console.log("Name:", name);
  console.log("Rest:", restProps);
}

ParentComponent({ name: "Angel", age: 23, city: "CDMX" });

console.log("\n=== IN REACT: STATE UPDATE ===");

// Simulating state update in React
const state = { 
  user: { name: "Angel", age: 23 },
  theme: "dark"
};

// Update immutably
const newState = {
  ...state,
  user: {
    ...state.user,
    age: 24
  }
};

console.log("Original:", state.user.age); // 23
console.log("New:", newState.user.age); // 24

console.log("\n=== DESTRUCTURING IN LOOPS ===");

const items = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" },
  { id: 3, name: "Keyboard" }
];

// Destructuring in forEach
items.forEach(({ id, name }) => {
  console.log(`${id}: ${name}`);
});

// Destructuring in map
const itemNames = items.map(({ name }) => name);
console.log(itemNames); // ["Laptop", "Mouse", "Keyboard"]

console.log("\n=== COMMON USE CASES ===");

// Extract exactly what you need from object
const handleUserData = (userData) => {
  const { name, email, preferences: { theme, language } = {} } = userData;
  console.log(name, email, theme, language);
};

handleUserData({
  name: "Angel",
  email: "angel@example.com",
  preferences: { theme: "dark", language: "en" }
});

// Create version without sensitive properties
const user2 = { id: 1, name: "Angel", password: "secret123" };
const { password, ...safeUser } = user2;
console.log(safeUser); // { id: 1, name: "Angel" }

console.log("\n=== COMPARISON: WITH vs WITHOUT ===");

console.log("❌ Without destructuring:");
console.log("  const name = user.name;");
console.log("  const age = user.age;");

console.log("\n✅ With destructuring:");
console.log("  const { name, age } = user;");

console.log("\n❌ Without spread:");
console.log("  const newArr = arr.concat([4, 5]);");

console.log("\n✅ With spread:");
console.log("  const newArr = [...arr, 4, 5];");

console.log("\n=== CHECKLIST ===");
console.log("✅ Use destructuring in arrays and objects");
console.log("✅ Use spread operator for immutable copies");
console.log("✅ Use spread to pass props in React");
console.log("✅ Combine destructuring with default values");
console.log("✅ Understand the difference between shallow and deep copies");
