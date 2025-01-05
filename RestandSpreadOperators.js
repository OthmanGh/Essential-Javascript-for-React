import { getMovie } from "./data.js"

const movie3 = getMovie(3)
console.log(movie3)

const movie3Genres = movie3.genres

//  Rest in Array Destructuring
const [firstGenre, ...restOfGenres] = movie3Genres // only place in the end of destructuring opeartion
console.log(firstGenre, restOfGenres)

function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0)
}
console.log(sum(1, 2, 3, 4))

// Rest in Object Destructuring
const { a, ...rest } = combinedObject
console.log(a) // Output: 1
console.log(rest) // Output: { b: 2, c: 3, d: 4 }

// * Spread operator
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combinedArray = [...arr1, ...arr2]
console.log(combinedArray) // Output: [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }
const combinedObject = { ...obj1, ...obj2 }
console.log(combinedObject) // Output: { a: 1, b: 2, c: 3, d: 4 }

function multiply(a, b, c) {
  return a * b * c
}
const numbers = [2, 3, 4]
console.log(multiply(...numbers)) // Output: 24

const newGenres = [...movie3Genres, "fantasy", "humor"] // with arrays
console.log(newGenres)

const updated3Movie = {
  ...movie3,
  // ? overwriting existing property
  genres: newGenres,
  // ? adding new property
  language: "Korean",
}

console.log(updated3Movie)

// Practice Exercises

// 1. Write a function that uses rest operator to accept multiple arguments and returns their product.
function product(...args) {
  return args.reduce((acc, curr) => acc * curr, 1)
}
console.log(product(2, 3, 5))

// 2. Create a copy of an object and add a new property using spread operator.
const originalObj = { x: 10, y: 20 }
const updatedObj = { ...originalObj, z: 30 }
console.log(updatedObj)

// 3. Merge two arrays and sort them using spread operator.
const arr3 = [5, 10, 1]
const arr4 = [8, 2, 6]
const sortedArray = [...arr3, ...arr4].sort((a, b) => a - b)
console.log(sortedArray)
