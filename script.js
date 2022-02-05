
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start ();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
        if (a !='' && b !='' && a.length <50 && a != null && b != null) {
            personalMovieDB.movies[a] = b;
            console.log('done')
            } else {
                console.log('Error');
                i--;
            }
    }

}
rememberMyFilms ()

function detectPersonalLevel () {
    
if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (numberOfFilms >= 10 || numberOfFilms < 30) {
    console.log('Вы классический зритель')
} else if(numberOfFilms >= 30) {
    console.log('Вы киноман')
} else {
    console.log ('Произошла ошибка')
}
}
detectPersonalLevel ()


function showMyDB (hidden) {
    if (!hidden) {
        console.log (personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)

function writeYourGenres () {5
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i-1]=prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres ()

console.log(personalMovieDB);