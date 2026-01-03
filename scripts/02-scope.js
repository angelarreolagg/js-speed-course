// ============================================
// 2. SCOPE: Block vs Function
// ============================================

console.log("=== FUNCTION SCOPE (var) ===");
function testVarScope() {
  if (true) {
    var funcScoped = "I exist throughout the function";
  }
  console.log(funcScoped); // Works
}
testVarScope();

console.log("\n=== BLOCK SCOPE (let, const) ===");
function testBlockScope() {
  if (true) {
    let blockScoped = "I only exist here";
    const alsoBlockScoped = "Me too";
    console.log(blockScoped); // Works
    console.log(alsoBlockScoped); // Works
  }
  // console.log(blockScoped); // ReferenceError
  // console.log(alsoBlockScoped); // ReferenceError
}
testBlockScope();

console.log("\n=== FOR LOOP SCOPE ===");
// With var (problem)
for (var i = 0; i < 3; i++) {
  console.log("var i:", i);
}
console.log("i after loop:", i); // 3 (it leaked)

// With let (correct)
for (let j = 0; j < 3; j++) {
  console.log("let j:", j);
}
// console.log(j); // ReferenceError

console.log("\n=== NESTED BLOCKS ===");
{
  const outer = "Level 1";
  console.log(outer);
  
  {
    const inner = "Level 2";
    console.log(outer); // Can access outer
    console.log(inner); // Access to inner
  }
  // console.log(inner); // ReferenceError
}

console.log("\n=== CLOSURE (Advanced) ===");
function createCounter() {
  let count = 0; // Block-scoped
  
  return function increment() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// count is not accessible from here, but the function remembers it

console.log("\n=== BEST PRACTICES ===");
console.log("✅ Always use 'let' or 'const'");
console.log("✅ Prefer 'const' by default");
console.log("✅ Only use 'let' if you need to reassign");
console.log("❌ Never use 'var' in modern code");
