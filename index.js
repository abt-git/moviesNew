'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
    },
    rememberMyFilms: () => {
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
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log("You've seen not much movies");
        } else if (personalMovieDB.count >=10 && personalMovieDB < 30) {
            console.log("You are a standart user");
        } else if (personalMovieDB.count >= 30) {
            console.log("You like movies very much!")
        } else console.log('Mistake');
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false 
        } else personalMovieDB.privat = true    
    },
    writeYourGenres: () => {
        for (let i=1; i <=3; i++) {

            let genre = prompt(`What is your favorite genre # ${i}?`, '');
        
            if (genre == '' || genre == null) {
                console.log('This is not correct answer'); 
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }        
        }  

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`You favorite genre ${i+1} is ${item}`);
        });
    }
    
};


   













    
    



