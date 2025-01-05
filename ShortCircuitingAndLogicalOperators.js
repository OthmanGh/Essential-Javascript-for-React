// Short-Circuiting and Logical Operators

// 1. Logical AND (&&)
// If the first operand is false, it returns the first operand.
// Otherwise, it returns the second operand.
const isLoggedIn = true
const username = "Othman"
const welcomeMessage = isLoggedIn && `Welcome, ${username}!`
console.log(welcomeMessage) // Output: "Welcome, Othman!"

const notLoggedIn = false && "This will never be executed"
console.log(notLoggedIn) // Output: false

// 2. Logical OR (||)
// If the first operand is true, it returns the first operand.
// Otherwise, it returns the second operand.
const displayName = "Guest" || "Default Name"
console.log(displayName) // Output: "Guest"

const noName = "" || "Default Name"
console.log(noName) // Output: "Default Name"

// 3. Nullish Coalescing Operator (??)
// Returns the right-hand operand when the left-hand operand is null or undefined.
const userAge = null ?? 25
console.log(userAge) // Output: 25

const validAge = 18 ?? 25
console.log(validAge) // Output: 18

// 4. Combining Logical Operators
const hasPermission = true
const isVerified = false
const canAccess = hasPermission && isVerified
console.log(canAccess) // Output: false

const fallbackAccess = hasPermission || isVerified
console.log(fallbackAccess) // Output: true

// 5. Short-Circuiting in Functions
function expensiveOperation() {
  console.log("Expensive operation executed")
  return true
}

const check = false && expensiveOperation()
console.log(check) // Output: false (expensiveOperation is not executed)

// 6. Practical Examples

// Default Values
const settings = {
  theme: "dark",
  fontSize: undefined,
}
const fontSize = settings.fontSize ?? 16
console.log(fontSize) // Output: 16

// Conditional Rendering
const isAdmin = true
const adminPanel = isAdmin && "Admin Panel"
console.log(adminPanel) // Output: "Admin Panel"

// Fallbacks with OR
const apiEndpoint = "" || "https://default-api.com"
console.log(apiEndpoint) // Output: "https://default-api.com"

// Exercises for Practice

// 1. Predict the output of the following:
const a = 0 || "Default A"
const b = null ?? "Default B"
const c = true && false
console.log(a, b, c) // Try to predict!

// 2. Write a function that takes a user object and returns the user's name or "Anonymous" if the name is not provided.
const getUserName = (user) => user.name || "Anonymous"

// 3. Use short-circuiting to conditionally log a message if a variable `isReady` is true.
const isReady = true
isReady && console.log("Ready to start!")
