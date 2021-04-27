import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Data from '../../public/sampleData.json'
import { data } from "autoprefixer";
import MovieList from "../MovieList/MovieList";
import Movie from "../Movie/Movie";
const SearchBar = dynamic(() => import("../SearchBar"));

export default function SearchPage(props) {
//   console.log(Data.Search)
	const initialData = Data.Search;

	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [id, setId] = useState("");
	const [movieData, setMovieData] = useState([]);
	const [movie, setMovie] = useState({});

	useEffect(() => {
		setMovieData(initialData);
	}, [])

	// console.log(movieData);

	

	const api = `http://www.omdbapi.com/?`;
	const apiS = `https://www.omdbapi.com/?`;

	const apiKey = `apikey=3877b0d8`;

	const fetchMovieData = () => {


		if(window.location.protocol === 'http:') {
			if(id !== "") {

				fetch(`${api}i=${id}&${apiKey}`)
				.then((response) => response.json())
				.then((result) => {
					// console.log(result);
					setMovie(result)
				});
	
			} else if( title !== "") {
				fetch(`${api}s=${title}&${apiKey}`)
				.then((response) => response.json())
				.then((result) => {
					// console.log(result);
					setMovieData(result.Search)
				});
			}


		} else {
			
			if(id !== "") {

				fetch(`${apiS}i=${id}&${apiKey}`)
				.then((response) => response.json())
				.then((result) => {
					// console.log(result);
					setMovie(result)
				});
	
			} else if( title !== "") {
				fetch(`${apiS}t=${title}&${apiKey}`)
				.then((response) => response.json())
				.then((result) => {
					// console.log(result);
					setMovieData(result.Search)
				});
			}
		}

		
		
	}

	const flag = ( id !== "" );

	return (
		<>
			<p className="text-center my-10 text-3xl font-medium">Explore movies</p>
			<div className="boxed">
				<SearchBar title={title} year={year} id={id} setTitle={setTitle} setYear={setYear} setId={setId} fetchMovieData={fetchMovieData} />
				{ flag ? <Movie movie={movie}/> : <MovieList movieData={movieData}/> }
				
			</div>
		</>
	);
}
