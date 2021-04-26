import React from 'react';
import Movie from '../Movie/Movie';


const MovieList = ({movieData}) => {
    return (
        <div className="MovieList">
            <div className="container">
            
                <div className="flex-container">
                    {movieData.map((movie) => 
                        <Movie movie={movie} key={movie.imdbID}/>
                    )}
                    
                </div>
            </div>
            
        </div>
    );
};

export default MovieList;