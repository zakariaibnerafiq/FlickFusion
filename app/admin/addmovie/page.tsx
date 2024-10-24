'use client'
import axios from 'axios'
import { useEffect, useState, ChangeEvent, FormEvent } from 'react'

interface MovieData {
    title: string;
    description: string;
    releaseDate: string;
    genre: string;
    rating: string;
    image: string;
  }

function AdminDashboard() {
    const [movieId, setMovieId] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);    
    const [movieData, setMovieData] = useState<MovieData>({
        title: '',
        description: '',
        releaseDate: '',
        genre: '',
        rating: '',
        image: '',
    });

    const fetchMovieData = async (movieId: string): Promise<void> => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`
                }
            })
    
            const data = response.data;

            setMovieData({
                title: data.title,
                description: data.overview,
                releaseDate: data.release_date,
                genre: data.genres.map((genre: any) => genre.name).join(', '),
                rating: data.vote_average,
                image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
            });
            console.log(data);
        } catch (err) {
            setError('An error occurred while fetching the movie data.');
        }
    };
    
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;
        setMovieData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
      };
  
    const  handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        // Validate fields here (make sure no fields are empty)
        if (!movieData.title || !movieData.description || !movieData.releaseDate || !movieData.genre || !movieData.rating || !movieData.image) {
            setError('All fields are mandatory.');
            return;
        }
        // Submit movieData to your backend API or state management
        
        const data = {
            movie: movieData,
            tmdbId: movieId,
        }

        try{
            const response = await axios.post('/api/movie/addnew', data)
            if (response.data.success){
                setSuccess(true)
            } else {
                setError(response.data.message);
            }
        } catch (err){
            console.error(err)
        }

        console.log('Submitted movie data:', data);
    };
    
    useEffect(() => {
        if (movieId) {
            fetchMovieData(movieId);
        }
    }, [movieId]);


    return (
        <div className='flex-1 lg:max-w-2xl h-full'>
            <div className="space-y-6">
                <div>
                    <h3 className='text-lg font-medium text-peach'>Add Movie</h3>
                    <p className='text-sm text-text'>Fill the movie information below to upload it to the database</p>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-base-200 h-[1px] w-full"></div>
                {
                    success ? (
                        <div className='text-peach space-y-6'>
                            <p className='text-peach'>Movie added successfully!</p>
                            <button onClick={() =>{
                                setMovieId('')
                                setMovieData({
                                    title: '',
                                    description: '',
                                    releaseDate: '',
                                    genre: '',
                                    rating: '',
                                    image: '',
                                })
                                setError(null)
                                setSuccess(false)
                            }} className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-peach text-base-700 shadow hover:bg-peach/90 h-9 px-4 py-2'>Add another movie</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className='space-y-8'>
                            <div className='space-y-2'>
                                <label htmlFor="movieId" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>TMDB Movie ID</label>
                                <input
                                placeholder='Enter TMDB Movie ID'
                                type="text"
                                id="movieId"
                                value={movieId}
                                onChange={(e) => setMovieId(e.target.value)}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                
                            <div className='space-y-2'>
                                <label htmlFor="title" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Title</label>
                                <input
                                placeholder='Enter Movie Title'
                                type="text"
                                id="title"
                                name="title"
                                value={movieData.title}
                                onChange={handleInputChange}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                    
                            <div className='space-y-2'>
                                <label htmlFor="description" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Description</label>
                                <textarea
                                placeholder='Enter Movie Description'
                                id="description"
                                name="description"
                                value={movieData.description}
                                onChange={handleInputChange}
                                required
                                className='flex min-h-[120px] w-full rounded-md border border-peach bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring resize-none text-text'
                                />
                            </div>
                    
                            <div className='space-y-2'>
                                <label htmlFor="releaseDate" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Release Date</label>
                                <input
                                type="date"
                                id="releaseDate"
                                name="releaseDate"
                                value={movieData.releaseDate}
                                onChange={handleInputChange}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                    
                            <div className='space-y-2'>
                                <label htmlFor="genre" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Genre</label>
                                <input
                                placeholder='Enter Movie Genre'
                                type="text"
                                id="genre"
                                name="genre"
                                value={movieData.genre}
                                onChange={handleInputChange}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                    
                            <div className='space-y-2'>
                                <label htmlFor="rating" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Rating</label>
                                <input
                                placeholder='Enter Movie Rating'
                                type="number"
                                step="0.1"
                                id="rating"
                                name="rating"
                                value={movieData.rating}
                                onChange={handleInputChange}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                    
                            <div className='space-y-2'>
                                <label htmlFor="image" className='text-sm font-medium cursor-not-allowed leading-none text-mauve'>Image URL</label>
                                <input
                                placeholder='Enter Movie Image URL'
                                type="text"
                                id="image"
                                name="image"
                                value={movieData.image}
                                onChange={handleInputChange}
                                required
                                className='flex h-9 w-full rounded-md border border-peach bg-transparent px-3 py-1 text-sm shadow-sm transition-colors  placeholder:text-base-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring text-text'
                                />
                            </div>
                    
                            {error && <p className='text-sm font-medium text-red'>{error}</p>}
                    
                            <button type="submit" className='inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-peach text-base-700 shadow hover:bg-peach/90 h-9 px-4 py-2'>Submit</button>
                        </form>
                    )
                }
            </div>
        </div>
    );
  }
  
  export default AdminDashboard;
