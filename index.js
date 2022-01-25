
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b =  prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.movies[a] = b;
        } else {
            i--;
        } 
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personaMovieDB.count > 0 && personaMovieDB.count < 10 ) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personaMovieDB.count > 9 && personaMovieDB.count < 30) {
        alert('Вы классический зритель!');
    } else if (personaMovieDB.count > 29) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personaMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

showMyDB(personaMovieDB.privat);



