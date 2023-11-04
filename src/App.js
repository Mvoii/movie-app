import React, { useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import Searchbox from './components/SearchBox';
import AddFavourite from './components/AddFavourites';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=3da8b0df`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

    return <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = "Movies"/>
        <Searchbox searchValue = {searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList movies={movies} favouriteComponent={AddFavourite}/>
      </div>
    </div>
};


export default App;
