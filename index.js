const numberOfFilms = +prompt('How many movies have you seen?', 1);
alert(`You have seen ${numberOfFilms}`);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
   
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('Your last watched Movie?', ),
        rate = prompt('Rate?', );

        if (lastMovie != null && rate != null && lastMovie != '' && rate != '' && lastMovie.length <50) {
            personalMovieDB.movies[lastMovie] = rate;
            console.log('done');       
        } else {
            console.log('error');
            i--;
        }
        
    }
    
    console.log(personalMovieDB);

    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >=10 && personalMovieDB < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман")
    } else console.log('Mistake');



