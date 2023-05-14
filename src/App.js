import { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import './App.css';
import SearchIcon from './search.svg';

// Kinopoisk API Unofficial - website: https://kinopoiskapiunofficial.tech
const API_URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}keyword=${title}&page=1`,{
            headers: {
                "X-API-KEY": "a099b72c-35a3-412e-a93c-f2a2217d8cca",
              },
        });
        const data = await response.json();
        console.log(data.films)
        setMovies(data.films)
    }

    useEffect(() => {
        searchMovies('home alone');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0
                ? (
                    <div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )}
        </div>
    );
}

export default App;