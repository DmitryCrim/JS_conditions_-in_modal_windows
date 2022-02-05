
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

if (numberOfFilms < 10) {
    console.log('Просмотрено довольно мало фильмов')
} else if (numberOfFilms >= 10 || numberOfFilms < 30) {
    console.log('Вы классический зритель')
} else if(numberOfFilms >= 30) {
    console.log('Вы киноман')
} else {
    console.log ('Произошла ошибка')
}


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

console.log(personalMovieDB);