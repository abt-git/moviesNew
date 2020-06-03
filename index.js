'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you watched?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you watched?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt('What was the last movie you watched?', ),
              rate = prompt(`It's rate?`, );

        if (lastMovie != null && rate != null && lastMovie != '' && rate != '' && lastMovie.length <50) {
            personalMovieDB.movies[lastMovie] = rate;
            console.log('done');       
        } else {
            console.log('error');
            i--;
        }
        
    }
}
   
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("You've seen not much movies");
    } else if (personalMovieDB.count >=10 && personalMovieDB < 30) {
        console.log("You are a standart user");
    } else if (personalMovieDB.count >= 30) {
        console.log("You like movies very much!")
    } else console.log('Mistake');
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i=1; i <=3; i++) {
    let genre = +prompt(`What is your favorite genre # ${i}?`, '');
    personalMovieDB.genres[i-1] = genre;
    }  
}

writeYourGenres();
    
    



