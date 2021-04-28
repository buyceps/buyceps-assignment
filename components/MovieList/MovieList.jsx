import React from 'react';
import Movie from '../Movie/Movie';
import InfiniteScroll from 'react-infinite-scroll-component';


const MovieList = ({ movieData,fetchMovieData, setPageNum}) => {
    return (
        <div className="MovieList">
            <div className="container">

                
                <InfiniteScroll
                    dataLength={movieData.length} //This is important field to render the next data
                    next={fetchMovieData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                    className="flex-container"
                >
                    {movieData.map((movie) =>
                        <Movie movie={movie} key={movie.imdbID} />
                    )}

                </InfiniteScroll>
                    

                
            </div>

        </div>
    );
};

export default MovieList;