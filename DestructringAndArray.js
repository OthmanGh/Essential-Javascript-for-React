import { getMovies, getMovies } from "./data.js"
const movies = getMovies()

// * Destructring: use when we want to get some data out of an object or out of an array
const movie2 = getMovie(2)
movie2

// const title = movie2.title
// const director = movie2.director
// rely on the property name
const {
  title,
  director,
  genres: movie2Genres,
  hasSequel: movie2HasSequel,
} = movie2

console.log(title, director, movie2Genres)

// rely on the order of elements
const [a, b, c] = movie2Genres
console.log(a, b, c)
