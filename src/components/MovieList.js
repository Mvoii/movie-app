import React from 'react'

const MovieList = (prop) => {
    const FavouriteComponent = prop.favouriteComponent;

    return (
        <>
            {prop.movies.map((movie, index) => (
            <div className='image-container d-flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
                <div className='overlay d-flex align-items-center justify-contet-center'>
                    <FavouriteComponent/>
                </div>
            </div>
            ))}
        </>
    )
}

export default MovieList;
