// Ternary Operators in JavaScript
// Syntax: condition ? expressionIfTrue : expressionIfFalse;

// Example 1: Checking if a number is even or odd
const number = 5
const isEven = number % 2 === 0 ? "Even" : "Odd"
console.log(`The number ${number} is ${isEven}.`)
// Output: The number 5 is Odd.

// Explanation:
// - The condition (number % 2 === 0) checks if the number is divisible by 2.
// - If true, it returns "Even"; otherwise, it returns "Odd".

// Example 2: Determining eligibility for voting
const age = 17
const canVote = age >= 18 ? "Eligible to vote" : "Not eligible to vote"
console.log(`At age ${age}, you are ${canVote}.`)
// Output: At age 17, you are Not eligible to vote.

// Explanation:
// - The condition (age >= 18) checks if the age is 18 or higher.
// - If true, it returns "Eligible to vote"; otherwise, it returns "Not eligible to vote".

// Example 3: Shortened If-Else for Strings
const userRole = "admin"
const welcomeMessage =
  userRole === "admin" ? "Welcome, Admin!" : "Welcome, User!"
console.log(welcomeMessage)
// Output: Welcome, Admin!

// Explanation:
// - The condition (userRole === "admin") checks the user's role.
// - If the role is "admin", it returns "Welcome, Admin!"; otherwise, "Welcome, User!".

// Example 4: Nested Ternary Operators (Advanced Example)
const score = 85
const grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F"
console.log(`Your score of ${score} gives you a grade of ${grade}.`)
// Output: Your score of 85 gives you a grade of B.

// Explanation:
// - Multiple conditions are evaluated one by one in a nested manner.
// - Be cautious: Nested ternary operators can become hard to read.

// Example 5: Assigning default values
const username = null
const displayName = username ? username : "Guest"
console.log(`Hello, ${displayName}!`)
// Output: Hello, Guest!

// Explanation:
// - The condition (username) checks if the username is truthy.
// - If true, it uses the username; otherwise, it defaults to "Guest".

// Best Practices
// 1. Use ternary operators for simple conditions only.
// 2. Avoid deep nesting; use if-else or functions for complex logic.
// 3. Ensure readability when using ternary operators in your code.

// Try It Yourself
// Create a few conditions and use ternary operators to return different messages or values based on the conditions.
