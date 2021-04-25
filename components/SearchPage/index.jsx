import React from "react";
import dynamic from "next/dynamic";
import Data from '../../public/sampleData.json'
import { data } from "autoprefixer";
const SearchBar = dynamic(() => import("../SearchBar"));

export default function SearchPage(props) {
  console.log(Data.Search)
	return (
		<>
			<p className="text-center my-10 text-3xl font-medium">Explore movies</p>
			<div className="boxed">
				<SearchBar />
        {/* Display Search results here */}
        <div className="sample-data">
          <p className="my-5 font-medium">Sample Data</p>
          {/* Sample api response for term "interstellar" is included to get you started */}
          {
            Data.Search.map((movie) => (
              <div className="mb-5" key={movie.imdbID}>
                <p>{movie.Title}</p>
                <p>{movie.Poster}</p>
                <p>{movie.Year}</p>
                <p>{movie.imdbID}</p>
              </div>
            ))
          }
        </div>
			</div>
		</>
	);
}
