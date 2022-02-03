const personaMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personaMovieDB.count == '' || personaMovieDB.count == null || isNaN(personaMovieDB.count)) {
            personaMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b =  prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personaMovieDB.movies[a] = b;
            } else {
                i--;
            } 
        }
    },
    detectPersonalLevel: () => {
        if (personaMovieDB.count > 0 && personaMovieDB.count < 10 ) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personaMovieDB.count > 9 && personaMovieDB.count < 30) {
            alert('Вы классический зритель!');
        } else if (personaMovieDB.count > 29) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    },
    showMyDB: (hidden) => {
        if (!hidden) {
            console.log(personaMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personaMovieDB.privat) {
            personaMovieDB.privat = false;
        } else {
            personaMovieDB.privat = true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLowerCase;

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personaMovieDB.genres[i - 1] = genre;
            }  
        }

        personaMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};




