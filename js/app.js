let numberOfFilms = +prompt('Qancha film ko`rgansiz?');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

for (let i = 0; i < 2; i++) {
    let a = prompt('Oxirgi ko`rgan filmlaringizdan biri?'),
        b = prompt('Uni qancha baholagan bo`lardingiz?');

    if (a == '' && b == '' && a == null && b == null) {
        i--;
        console.log('done');
    } else {
        personalMovieDB.movies[a] = b;
        console.log('error');
    }
}
console.log(personalMovieDB);

if (personalMovieDB.count < 10) {
    console.log(`Ko'rilgan filmlar soni kam`);
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log(`Siz klassik tomoshabinsiz`);
} else if (personalMovieDB.count >= 30) {
    console.log(`Siz kino ishqibozisiz`);
} else {
    console.log(`Xatolik yuz berdi`);
}