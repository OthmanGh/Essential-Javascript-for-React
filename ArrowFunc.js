// Arrow Functions vs Traditional Functions

// 1. Arrow Function
const add = (a, b) => a + b
console.log(add(3, 5)) // Output: 8

// 2. Traditional Function
function addTraditional(a, b) {
  return a + b
}
console.log(addTraditional(3, 5)) // Output: 8

// 3. `this` Binding Example

// Arrow Function Example
const arrowObj = {
  value: 42,
  getValue: () => {
    console.log(this.value) // `this` refers to the outer scope (likely `window` or `undefined` in strict mode)
  },
}
arrowObj.getValue() // Output: undefined

// Traditional Function Example
const regularObj = {
  value: 42,
  getValue: function () {
    console.log(this.value) // `this` refers to the `regularObj`
  },
}
regularObj.getValue() // Output: 42

// 4. Constructor Function Example

// Arrow Function (Not a Constructor)
const PersonArrow = (name) => {
  this.name = name
}
// const john = new PersonArrow("John"); // Error: PersonArrow is not a constructor

// Traditional Function (Constructor)
function PersonTraditional(name) {
  this.name = name
}
const john = new PersonTraditional("John")
console.log(john.name) // Output: John

// 5. Implicit Return Example

// Arrow Function (Single-Line)
const squareArrow = (x) => x * x
console.log(squareArrow(4)) // Output: 16

// Traditional Function
function squareTraditional(x) {
  return x * x
}
console.log(squareTraditional(4)) // Output: 16

// Practice Exercises

// 1. Convert this traditional function into an arrow function
function greet(name) {
  return `Hello, ${name}!`
}

// 2. Explore `this` in both arrow and traditional functions
const car = {
  brand: "Tesla",
  getBrandArrow: () => console.log(this.brand),
  getBrandRegular: function () {
    console.log(this.brand)
  },
}
car.getBrandArrow()
car.getBrandRegular()
