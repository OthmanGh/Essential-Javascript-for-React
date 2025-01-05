const movies = [
  {
    id: 1,
    title: "Inception",
    releaseDate: "2010-07-16",
    director: "Christopher Nolan",
    genres: ["sci-fi", "thriller", "action"],
    hasSequel: false,
    runtime: 148,
    translations: {
      french: "Inception",
      spanish: "El origen",
      chinese: "盗梦空间",
    },
    reviews: {
      imdb: {
        rating: 8.8,
        ratingsCount: 2200000,
      },
      rottenTomatoes: {
        criticScore: 87,
        audienceScore: 91,
      },
    },
  },
  {
    id: 2,
    title: "The Matrix",
    releaseDate: "1999-03-31",
    director: "Lana Wachowski, Lilly Wachowski",
    genres: ["sci-fi", "action", "cyberpunk"],
    hasSequel: true,
    runtime: 136,
    translations: {
      french: "Matrix",
      spanish: "Matrix",
      korean: "매트릭스",
    },
    reviews: {
      imdb: {
        rating: 8.7,
        ratingsCount: 1900000,
      },
      rottenTomatoes: {
        criticScore: 88,
        audienceScore: 85,
      },
    },
  },
  {
    id: 3,
    title: "Parasite",
    releaseDate: "2019-05-30",
    director: "Bong Joon Ho",
    genres: ["thriller", "drama", "comedy"],
    hasSequel: false,
    runtime: 132,
    translations: {
      french: "Parasite",
      spanish: "Parásitos",
      chinese: "寄生虫",
    },
    reviews: {
      imdb: {
        rating: 8.6,
        ratingsCount: 800000,
      },
      rottenTomatoes: {
        criticScore: 98,
        audienceScore: 90,
      },
    },
  },
  {
    id: 4,
    title: "The Dark Knight",
    releaseDate: "2008-07-18",
    director: "Christopher Nolan",
    genres: ["action", "crime", "drama"],
    hasSequel: true,
    runtime: 152,
    translations: {
      french: "Le Chevalier Noir",
      spanish: "El caballero oscuro",
      chinese: "黑暗骑士",
    },
    reviews: {
      imdb: {
        rating: 9.0,
        ratingsCount: 2500000,
      },
      rottenTomatoes: {
        criticScore: 94,
        audienceScore: 94,
      },
    },
  },
  {
    id: 5,
    title: "Interstellar",
    releaseDate: "2014-11-07",
    director: "Christopher Nolan",
    genres: ["sci-fi", "adventure", "drama"],
    hasSequel: false,
    runtime: 169,
    translations: {
      french: "Interstellar",
      spanish: "Interestelar",
      korean: "인터스텔라",
    },
    reviews: {
      imdb: {
        rating: 8.6,
        ratingsCount: 1700000,
      },
      rottenTomatoes: {
        criticScore: 72,
        audienceScore: 85,
      },
    },
  },
]

export function getMovies() {
  return movies
}

export function getMovie(id) {
  return movies.find((movie) => movie.id === id)
}
