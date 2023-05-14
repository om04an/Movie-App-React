import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.year}</p>
            </div>
            
            <div>
                <img src={movie.posterUrlPreview !== "N/A" ? movie.posterUrlPreview : 'https://via.placeholder.com/400'} alt={movie.nameEn}/>
            </div>

            <div>
                <span>{movie.type}</span>
                <h3>{movie.nameEn}</h3>
            </div>
        </div>
    );
}

export default MovieCard;