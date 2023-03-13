import React, { useState, useEffect } from 'react';
import Movie from './components/Movie';

const url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_API}`
  
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&query=`
const App = () => {

  const [movies,setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchMovie = async (url) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
    setIsLoading(false)
  }
  
  useEffect(() => {
      fetchMovie(url)
  }, [])

  const handleSearch = (value) => {
    const searchMovie = `${searchUrl}${value}`
    if(value === '') {
      fetchMovie(url)
    }else {
      fetchMovie(searchMovie)
    }
  }

  return (
    <main className='mx-auto max-w-[70rem] p-5 '>
      <form className='mb-10'>
        <div>
          <h1 className='text-3xl mb-2 font-bold text-textCl'>Search Movies</h1>
          <input onChange={(e) => handleSearch(e.target.value)} type="text" placeholder='Search' className='border w-full md:max-w-[21.7rem] p-2 outline-blue-200 rounded-md transition-colors ease-in' />
        </div>
      </form>
            {isLoading ? <div class="flex items-center justify-center">
        <div
          class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
            >Loading...</span
          >
        </div>
      </div> : <Movie movies={movies} />}
    </main>
  )
}

export default App
