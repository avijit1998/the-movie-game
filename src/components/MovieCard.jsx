import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"

function MovieCard() {
    const [imageUrl, setImageUrl] = useState(null);

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTQwNTAxYTY0ZDEzNzM3MThiZWMxYTQwNDY3ZWEyNiIsInN1YiI6IjY1ODg3NjdmZTI5NWI0NzEyZDU4NGFlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.13OIrJuxBQjiVtNp7OwbWkD5BIybqzabxa81dU07ANs'
        }
    };

    const randomIndex = Math.floor(Math.random() * 100);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/18/similar?language=en-US&page=1', options)
          .then(response => response.json())
          .then(movies => {
            console.log(movies.results[randomIndex]);
            const movie = movies.results[randomIndex];
            setImageUrl('https://image.tmdb.org/t/p/w500' + movie.poster_path);
          })
          .catch(error => console.error(error));
    }, []);


    return (
        <>
        <div className="rounded-lg bg-white shadow-lg m-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover: duration-300">
                    <img src={imageUrl} alt="movie poster" className="rounded-lg object-contain shadow-lg" />
                    <div className="p-4">
                        <h2 className="mb-2 text-lg font-semibold">Movie Title With Bigger Name</h2>
                        <Button className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
                            Select
                        </Button>
                    </div>
                </div> 
        </>
    )
}

export default MovieCard