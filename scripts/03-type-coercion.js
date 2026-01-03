// ============================================
// 3. TYPE COERCION: The Silent Culprit
// ============================================

console.log("=== ADDITION (CONCATENATION OR SUM) ===");
console.log(5 + 5); // 10 (numeric sum)
console.log("5" + 5); // "55" (concatenation: string wins)
console.log(5 + "5"); // "55" (converts to string)

console.log("\n=== ARITHMETIC OPERATIONS ===");
console.log("10" - 5); // 5 (string converts to number)
console.log("10" * 2); // 20 (converts to number)
console.log("10" / 2); // 5 (converts to number)
console.log("text" - 5); // NaN (cannot convert)

console.log("\n=== WHY NaN? ===");
console.log(typeof NaN); // "number" (JS quirk)
console.log("text" - 5); // NaN (no valid number)
console.log(parseInt("abc") - 5); // NaN
console.log(undefined - 5); // NaN
console.log(null - 5); // -5 (null converts to 0)

// NaN doesn't compare to itself
console.log(NaN === NaN); // false ⚠️
console.log(Number.isNaN(NaN)); // true ✅

console.log("\n=== COERCION WITH BOOLEANS ===");
console.log(true + 1); // 2 (true → 1)
console.log(false + 1); // 1 (false → 0)
console.log("The number is: " + true); // "The number is: true"

console.log("\n=== COERCION IN COMPARISONS ===");
console.log(5 == "5"); // true (coercion: compares values)
console.log(5 === "5"); // false (no coercion: different types)
console.log(0 == false); // true (coercion)
console.log(0 === false); // false (different types)
console.log(null == undefined); // true (special coercion)
console.log(null === undefined); // false

console.log("\n=== PROBLEMS IN REACT ===");
// In React this can cause bugs
const data = { count: "5" };
console.log(data.count + 1); // "51" (concatenation, not sum!)

// Solution: explicit conversion
console.log(Number(data.count) + 1); // 6

console.log("\n=== DANGEROUS CASES ===");
console.log("" + 0); // "0"
console.log("" == 0); // true (coercion)
console.log("" === 0); // false
console.log([] == 0); // true (array converts)
console.log([] === 0); // false

console.log("\n=== LESSON ===");
console.log("⚠️ NEVER USE == or !=");
console.log("✅ ALWAYS USE === or !==");
console.log("✅ CONVERT TYPES EXPLICITLY WHEN NECESSARY");
