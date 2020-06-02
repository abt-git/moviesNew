const numberOfFilms = prompt('How many movies have you seen?', 1);
alert(`You have seen ${numberOfFilms}`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastMovie1 = prompt('Your last watched Movie 1?', ),
    rate1 = prompt('Rate 1?', ),
    lastMovie2 = prompt('Your last watched Movie 2?', ),
    rate2 = prompt('Rate 2?', );

personalMovieDB.movies[lastMovie1] = rate1;

personalMovieDB.movies[lastMovie2] = rate2;

console.log(personalMovieDB);
