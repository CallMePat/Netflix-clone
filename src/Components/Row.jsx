import React, { useEffect, useState } from 'react';
import axios from "../axios";
import '../App.css';

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData()
    }, [fetchUrl])


    return (
        <div className='text-white ml-5'>
            <h2>{title}</h2>

            <div className='flex overflow-y-hidden overflow-x-scroll p-5 row_posters'>
                {movies.map((movie) => (
                    ((isLargeRow && movie.poster_path) ||
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img
                            className={`row_poster ${isLargeRow && "row_PosterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${
                                isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`}
                            alt={movie.name}
                        />

                    )

                

                ))}

            </div>
        </div >
    )
}
