// ============================================
// 5. OPERATORS: Comparison and Logical
// ============================================

console.log("=== EQUALITY OPERATORS (the special ones!) ===");

// == (with coercion) - AVOID
console.log(5 == "5"); // true (type coercion)
console.log(0 == false); // true
console.log(null == undefined); // true
console.log("" == 0); // true

// === (without coercion) - ALWAYS USE
console.log(5 === "5"); // false (different types)
console.log(0 === false); // false
console.log(null === undefined); // false

console.log("\n=== INEQUALITY OPERATORS ===");

// != (with coercion) - AVOID
console.log(5 != "5"); // false
console.log(5 != "6"); // true

// !== (without coercion) - ALWAYS USE
console.log(5 !== "5"); // true
console.log(5 !== "6"); // true

console.log("\n=== COMPARISON OPERATORS ===");

console.log(10 > 5); // true
console.log(10 >= 10); // true
console.log(5 < 10); // true
console.log(5 <= 5); // true

console.log("\n=== LOGICAL OPERATORS ===");

// AND (&&) - returns the FIRST falsy value or the last truthy value
console.log(true && true); // true
console.log(true && false); // false
console.log(5 && 10); // 10 (both truthy, returns last)
console.log(0 && 10); // 0 (first falsy)
console.log(null && 5); // null (first falsy)

// OR (||) - returns the FIRST truthy value or the last value
console.log(false || true); // true
console.log(false || false); // false
console.log(0 || 10); // 10 (first truthy)
console.log(5 || 10); // 5 (first truthy)
console.log(null || undefined); // undefined (all falsy)

// NOT (!) - inverts boolean
console.log(!true); // false
console.log(!false); // true
console.log(!5); // false (5 is truthy)
console.log(!0); // true (0 is falsy)

console.log("\n=== TRUTHY vs FALSY VALUES ===");

// Falsy: false, 0, "", null, undefined, NaN
console.log("Falsy values:");
console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

// Everything else is truthy
console.log("\nTruthy values:");
console.log(Boolean(1)); // true
console.log(Boolean("text")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true

console.log("\n=== USES IN REACT ===");

// Conditional rendering with &&
const isLoggedIn = true;
const userName = "Angel";

// Only renders if isLoggedIn is true
console.log(isLoggedIn && `Welcome, ${userName}`); // "Welcome, Angel"

// Default value with ||
const theme = null;
const defaultTheme = theme || "light";
console.log(defaultTheme); // "light"

// Better modern option: nullish coalescing (??)
const preference = undefined;
const finalValue = preference ?? "default";
console.log(finalValue); // "default"

console.log("\n=== EXAMPLE: REACT COMPONENT (PSEUDOCODE) ===");

function UserCard(props) {
  const { user, isAdmin } = props;
  
  // Conditional rendering
  // In JSX: {isAdmin && <AdminPanel />}
  console.log("User:", user);
  console.log("Show admin panel:", isAdmin && true);
}

UserCard({ user: { name: "Angel" }, isAdmin: true });

console.log("\n=== SHORT-CIRCUIT EVALUATION ===");

let result;

// && for safety
result = 5 > 3 && "The number is greater";
console.log(result); // "The number is greater"

result = 5 > 10 && "Won't execute";
console.log(result); // false

// || for default values
result = null || "Default value";
console.log(result); // "Default value"

result = "Original value" || "Not used";
console.log(result); // "Original value"

console.log("\n=== TERNARY (CONDITIONAL OPERATOR) ===");

const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested (but less readable)
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : "C";
console.log(grade); // "B"

console.log("\n=== CHECKLIST ===");
console.log("✅ Use === and !==, never == and !=");
console.log("✅ Understand && and || for actual values, not just booleans");
console.log("✅ Memorize what is truthy and what is falsy");
console.log("✅ Use ternary for simple conditionals");
console.log("✅ In React, use && for conditional rendering");
