// 1. map(): Transforms each element in the array and returns a new array.
const numbers = [1, 2, 3, 4, 5]
const squared = numbers.map((num) => num * num)
console.log(squared) // Output: [1, 4, 9, 16, 25]

// 2. filter(): Returns a new array containing elements that meet a condition.
const evenNumbers = numbers.filter((num) => num % 2 === 0)
console.log(evenNumbers) // Output: [2, 4]

// 3. reduce(): Reduces the array to a single value by applying a callback function.
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum) // Output: 15

// 4. forEach(): Executes a provided function for each array element.
numbers.forEach((num) => console.log(num)) // Output: 1 2 3 4 5 (each on a new line)

// 5. find(): Returns the first element that satisfies a condition.
const firstEven = numbers.find((num) => num % 2 === 0)
console.log(firstEven) // Output: 2

// 6. findIndex(): Returns the index of the first element that satisfies a condition.
const firstEvenIndex = numbers.findIndex((num) => num % 2 === 0)
console.log(firstEvenIndex) // Output: 1

// 7. some(): Checks if at least one element satisfies a condition.
const hasNegative = numbers.some((num) => num < 0)
console.log(hasNegative) // Output: false

// 8. every(): Checks if all elements satisfy a condition.
const allPositive = numbers.every((num) => num > 0)
console.log(allPositive) // Output: true

// 9. sort(): Sorts the elements of an array in place.
const unsorted = [5, 3, 8, 1, 2]
const sorted = [...unsorted].sort((a, b) => a - b)
console.log(sorted) // Output: [1, 2, 3, 5, 8]

// 10. concat(): Merges two or more arrays.
const letters = ["a", "b", "c"]
const combined = numbers.concat(letters)
console.log(combined) // Output: [1, 2, 3, 4, 5, 'a', 'b', 'c']

// 11. slice(): Returns a shallow copy of a portion of the array.
const sliced = numbers.slice(1, 4)
console.log(sliced) // Output: [2, 3, 4]

// 12. splice(): Adds or removes elements in the array.
const spliced = [...numbers]
spliced.splice(2, 1, 99) // Remove 1 element at index 2 and add 99
console.log(spliced) // Output: [1, 2, 99, 4, 5]

// 13. includes(): Checks if an array contains a specific element.
const hasThree = numbers.includes(3)
console.log(hasThree) // Output: true

// 14. flat(): Flattens nested arrays.
const nested = [1, [2, [3, 4]], 5]
const flattened = nested.flat(2)
console.log(flattened) // Output: [1, 2, 3, 4, 5]

// Practice Exercises

// 1. Use map() to double the values in the array.
const doubled = numbers.map((num) => num * 2)
console.log(doubled) // Try this!

// 2. Use filter() to extract numbers greater than 3.
const greaterThanThree = numbers.filter((num) => num > 3)
console.log(greaterThanThree) // Try this!

// 3. Use reduce() to find the product of all numbers.
const product = numbers.reduce((acc, num) => acc * num, 1)
console.log(product) // Try this!

// 4. Sort an array of strings alphabetically.
const words = ["banana", "apple", "grape"]
const sortedWords = words.sort()
console.log(sortedWords) // Try this!

// 5. Use flat() to flatten a deeply nested array to a single level.
const deepNested = [1, [2, [3, [4, 5]]]]
const singleLevel = deepNested.flat(Infinity)
console.log(singleLevel) // Try this!
