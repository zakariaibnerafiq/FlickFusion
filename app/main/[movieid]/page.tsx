'use client'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

interface MoviePageParam {
    params: {
        movieid: string
    }
}

function MoviePage({ params }: MoviePageParam) {
    const movieId = params.movieid
    console.log(movieId);

    const [movie, setMovie] = useState<any>()

    useEffect(() => {
        try {
            const fetchDetails = async () => {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                    headers: {
                        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
                    }
                })
                setMovie(response.data)
            }
            fetchDetails()
        } catch (error) {
            console.log(error);

        }
    }, [])
    console.log(movie);

    return (
        <div className='py-44 h-screen flex justify-center'>
            <div className='flex flex-col p-4'>
                <iframe
                    src={`https://moviesapi.club/movie/${movieId}`}
                    frameBorder="0"
                    height={500}
                    width={900}
                    allow="fullscreen" 
                    allowFullScreen >
                </iframe>
                {movie && (
                    <div className='flex flex-col justify-start mt-4'>
                        <h1 className='text-white text-3xl'>{movie.title}</h1>
                        <h1 className='mt-2 ml-1  font-semibold'>
                            {movie.genres.map((genre: { name: string, id: string }) => (
                                <span key={genre.id} className='mr-2 text-peach/80'>{genre.name}</span>
                            ))}
                        </h1>
                    </div>
                )}
            </div>

        </div>
    )
}

export default MoviePage
