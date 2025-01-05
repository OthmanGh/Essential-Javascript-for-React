import { getMovie, getMovies } from "./data.js"

const FirstMovie = { ...getMovie(1), language: "Korean" }

// ? anything that can produces a value can be inside a tempalte literal block
const summary = `
The movie "${FirstMovie.title}" (original language: ${
  FirstMovie.language
}) was directed by ${FirstMovie.director} and released on ${
  FirstMovie.releaseDate
}. 
It belongs to the genres: ${FirstMovie.genres.join(", ")}. The runtime is ${
  FirstMovie.runtime
} minutes.

The movie received the following ratings:
- IMDb: ${
  FirstMovie.reviews.imdb.rating
} (${FirstMovie.reviews.imdb.ratingsCount.toLocaleString()} ratings)
- Rotten Tomatoes: ${
  FirstMovie.reviews.rottenTomatoes.criticScore
}% critic score and ${
  FirstMovie.reviews.rottenTomatoes.audienceScore
}% audience score.

Available translations include: 
- French: ${FirstMovie.translations.french}
- Spanish: ${FirstMovie.translations.spanish}
- Chinese: ${FirstMovie.translations.chinese}.
`

console.log(summary)
