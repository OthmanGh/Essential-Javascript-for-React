// Asynchronous JavaScript: Promises and Async/Await

// 1. Promises
// A promise represents a value that may be available now, or in the future, or never.

// Example: Creating a Promise
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true // Change this to false to test rejection
      if (success) {
        resolve("Data fetched successfully!")
      } else {
        reject("Error fetching data.")
      }
    }, 2000)
  })
}

// Using Promises with .then() and .catch()
fetchData()
  .then((result) => {
    console.log(result) // Output: Data fetched successfully! (if success is true)
  })
  .catch((error) => {
    console.error(error) // Output: Error fetching data. (if success is false)
  })

// 2. Async/Await
// Async/Await is a syntactic sugar built on Promises, making asynchronous code easier to read and write.

// Example: Using Async/Await
const fetchDataAsync = async () => {
  try {
    const result = await fetchData()
    console.log(result) // Output: Data fetched successfully! (if success is true)
  } catch (error) {
    console.error(error) // Output: Error fetching data. (if success is false)
  }
}

fetchDataAsync()

// 3. Parallel Execution with Promise.all()
// Example: Fetch multiple data sources in parallel
const fetchUser = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("User data"), 1000)
  })
}

const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Posts data"), 1500)
  })
}

const fetchAllData = async () => {
  try {
    const [user, posts] = await Promise.all([fetchUser(), fetchPosts()])
    console.log(user) // Output: User data
    console.log(posts) // Output: Posts data
  } catch (error) {
    console.error("Error fetching data in parallel.")
  }
}

fetchAllData()

// 4. Exercises

// Exercise 1: Create a promise that resolves after 3 seconds with the message "Exercise completed!".
// Use both .then() and async/await to handle the promise.

// Exercise 2: Write a function using async/await that fetches user data and post data sequentially (one after the other).

// Exercise 3: Modify the fetchData function to include a random chance of failure, and handle the error with a retry mechanism using Promises.
