const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQwNTAxYTY0ZDEzNzM3MThiZWMxYTQwNDY3ZWEyNiIsInN1YiI6IjY1ODg3NjdmZTI5NWI0NzEyZDU4NGFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13OIrJuxBQjiVtNp7OwbWkD5BIybqzabxa81dU07ANs'
    }
};

async function fetchMovie(setOptImgUrl, setOptName, setOptId) {
    try {
        let movie;
        const pageNumber = Math.floor(Math.random() * 17) + 1;
        const apiURL = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+pageNumber+'&primary_release_date.gte=1970-01-01&primary_release_date.lte=2000-01-01&sort_by=primary_release_date.desc&vote_count.gte=1&with_original_language=hi&with_people=35780%7C103883%7C87561%7C110721%7C85655%7C616995%7C84956';
        do {
            const response = await fetch(apiURL, options);
            const movies = await response.json();
            const randomIndex = Math.floor(Math.random() * 20);
            movie = await movies.results[randomIndex];
        } while (!movie.title);

        setOptImgUrl('https://image.tmdb.org/t/p/w500' + movie.poster_path);
        setOptName(movie.title);
        setOptId(movie.id);
    } catch (error) {
        console.log(error);
    }
}

export {fetchMovie};