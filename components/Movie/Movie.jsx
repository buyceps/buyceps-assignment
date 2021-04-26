import React from 'react';

const Movie = ({movie}) => {
    return (
        <div className="card">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={movie.Poster} alt="movieImage not found" />
                    </div>
                    <div className="col-md-6">
                        <h5 className="mt-3 font-weight-bold">{movie.Title}</h5>
                        <p className="mt-2">{movie.Year}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Movie;