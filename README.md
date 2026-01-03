# ✨ JavaScript Fundamentals & Advanced Concepts

A focused repository dedicated to clarifying and refreshing JavaScript concepts that needed reinforcement or review. This collection covers topics that either weren't fully clear to me previously or required a refresher. Note that some concepts are intentionally excluded because either I'm already familiar with them or they're considered too straightforward for this guide. The goal is to solidify understanding of commonly misunderstood areas and deepen technical proficiency through practical and focused examples.

---

## 1. Variables: undefined, null, var, let, const

### undefined

The default value of a variable declared but not initialized. It indicates that a variable exists but has no assigned value.

### null

An explicitly assigned value to represent "absence of value". Used when you consciously set something as having no content.

### var

The old keyword for declaring variables. It is **function-scoped** (explained later) and has unpredictable behaviors. **Not recommended in modern code**.

### let

Declares a variable that **can be reassigned** later. It is **block-scoped**, providing greater control and safety. Ideal for values that change during program execution.

### const

Declares a variable that **cannot be reassigned** after initialization. It is **block-scoped** like `let`. Note: `const` prevents reassignment, not mutation (you can modify object/array properties).

---

## 2. Scope: Block vs Function

- **Block-scoped** (`let`, `const`): Variables only exist within the `{}` block where they're defined (if, for, while, etc).
- **Function-scoped** (`var`): Variables exist throughout the entire function, regardless of blocks.

This difference is crucial for avoiding bugs and maintaining predictable code.

---

## 3. Type Coercion: The Silent Culprit

JavaScript automatically attempts to convert types when you perform operations between different types. This can cause unexpected results if you don't understand how it works.

### Why does it happen?

JavaScript is a weakly-typed language. When you add a string to a number, JavaScript decides to convert one type to continue the operation.

### Why do we get NaN?

`NaN` (Not a Number) appears when you attempt an arithmetic operation with a value that **cannot be meaningfully converted to a number**.

### Solution

Use TypeScript or be explicit with type conversions to avoid surprises.

---

## 4. Type Conversion

Converting between types is essential, especially in common operations like extracting numbers from strings (e.g., "16px" → 16).

### Main Methods

- **Number()**: Converts a value to a number. More strict.
- **parseInt()**: Extracts an integer from the beginning of a string. Useful for "16px" → 16.
- **parseFloat()**: Similar to `parseInt`, but allows decimals.
- **String()**: Converts to string.
- **Boolean()**: Converts to boolean.

---

## 5. Comparison Operators

### Equality Operators (JavaScript's special ones)

- **`==`**: Comparison with type coercion. ⚠️ Avoid, causes bugs.
- **`===`**: Strict comparison, no coercion. ✅ Always use this.
- **`!=`**: Not equal, with coercion. Avoid.
- **`!==`**: Not equal, no coercion. ✅ Use this.

### Logical Operators

- **`&&` (AND)**: Returns `true` if both conditions are true. In React: `condition && <Component />`.
- **`||` (OR)**: Returns `true` if at least one condition is true. In React: `value || defaultValue`.
- **`!` (NOT)**: Inverts a boolean value.

These operators have special behavior: they return the actual value, not necessarily `true` or `false`.

---

## 6. Arrays: Common Methods

Arrays are fundamental structures. Here are the most commonly used methods:

### Iteration Methods

- **map()**: Transforms each element and returns a new array.
- **filter()**: Returns a new array with elements that meet a condition.
- **find()**: Returns the first element that meets a condition.
- **reduce()**: Accumulates values into a final result.

### Modification Methods

- **push()**: Adds to the end.
- **pop()**: Removes from the end.
- **shift()**: Removes from the beginning.
- **unshift()**: Adds to the beginning.
- **slice()**: Creates a partial copy.
- **splice()**: Modifies the original array.

### Special Behavior: Undefined Indices

If you assign an element to an index that doesn't exist, JavaScript automatically creates intermediate spaces as `empty slots`.

---

## 7. Destructuring & Spread Operator

### Destructuring

Extracts values from arrays or objects into individual variables cleanly.

Example: `const { name, age } = person` instead of `person.name` and `person.age`.

### Spread Operator (`...`)

Expands an array or object to copy, combine, or pass arguments.

Example: `[...array1, ...array2]` combines two arrays without mutating either.

These patterns make code more readable and functional.

---

## 📂 Project Structure

Each concept has its own script in the `scripts/` folder:

```
scripts/
├── 01-variables.js          # undefined, null, var, let, const
├── 02-scope.js              # Block vs Function scoped
├── 03-type-coercion.js      # Type coercion and NaN
├── 04-type-conversion.js    # Explicit conversion
├── 05-operators.js          # Comparison and logical operators
├── 06-arrays.js             # Methods and behaviors
└── 07-destructuring.js      # Destructuring and spread
```

## 🚀 How to Run

```bash
node scripts/01-variables.js
node scripts/02-scope.js
# ... and so on
```

Each script is independent and contains complete examples you can run and modify.
