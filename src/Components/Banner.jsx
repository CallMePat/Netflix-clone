import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from '../axios';
import requests from '../Request';


export const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, []);


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
    }

    return (
        <div>
            <header className="h-[448px] relative text-white object-contain" style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>

                <div className='ml-8 pt-36 h-48'>
                    <h1 className='text-5xl font-bold pb-1.5'>{movie?.title || movie?.name || movie?.original_name} </h1>

                    <div>
                        <button className='cursor-pointer text-white outline-none border-none font-bold rounded px-8 mr-4 pt-2 
                         pb-2 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200' style={{
                            backgroundColor: `rgba(51, 51, 51, 0.5)`
                        }}>Play</button>
                        <button className='cursor-pointer text-white outline-none border-none font-bold rounded px-8 mr-4 pt-2 
                     pb-2 hover:text-black hover:bg-[#e6e6e6] transition-all duration-200' style={{
                                backgroundColor: `rgba(51, 51, 51, 0.5)`
                            }}>My List</button>
                    </div>

                    <h1 className='w-[24rem] leading-snug pt-4 text-sm h-20'> {truncate (movie?.overview, 150)}
                        </h1>
                </div>

                <div className='h-64' style={{
                    backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)"
                }} />
            </header>


        </div>
    )
}
