import React from 'react'
const poster = 'https://image.tmdb.org/t/p/original/';
const Movie = ({movies}) => {

  return (
    <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {movies.map((movie) => {
        return (
          <article key={movie.id}  className='relative overflow-hidden group'>
            <img src={`${poster}${movie.poster_path}`} alt={movie.title}
             className='object-contain w-full' />
             <div className='p-5 bg-descCl absolute translate-y-full group-hover:-translate-y-full transition-transform ease-in-out  bg-black text-white w-full '>
                <h4 className='text-2xl mb-2'>{movie.title}</h4>
                <p className={`text-lg font-semibold p-4 rounded-full ${movie.vote_average < 6 ? 'bg-red-500' : 'bg-green-500'} w-3 h-3 flex items-center justify-center`}>
                  {parseFloat(movie.vote_average).toFixed(1)}
                </p>
             </div>
          </article>
        )
      })}
    </section>
  )
}

export default Movie
