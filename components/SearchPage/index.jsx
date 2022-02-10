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
	const [pageNum, setPageNum] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	useEffect(() => {
		setMovieData(initialData);

	}, [])

	// console.log(movieData);

	const fetchMovieData = () => {

		let api = "";
		const apiKey = `apikey=3877b0d8`;

		if(window.location.protocol === 'http:') {
			api = `http://www.omdbapi.com/?`;
		} else {
			api = `https://www.omdbapi.com/?`;
		}


		if(id !== "") {

			fetch(`${api}i=${id}&${apiKey}`)
			.then((response) => response.json())
			.then((result) => {
				// console.log(result);
				setMovie(result)
			});

		} else if( title !== "") {

			// if(movieData.length > 200) {
			// 	setHasMore(false);
			// 	return;
			// }

			// setPageNum(pageNum => pageNum + 1);

			fetch(`${api}s=${title}&page=${pageNum}&${apiKey}`)
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				setMovieData((prevData) => [...prevData, ...result.Search])
			});
		}
		
		
	}

	

	const flag = ( id !== "" );

	return (
		<>
			<p className="text-center my-10 text-3xl font-medium">Explore movies</p>
			<div className="boxed">
				<SearchBar title={title} year={year} id={id} setTitle={setTitle} setYear={setYear} setId={setId} fetchMovieData={fetchMovieData} setMovieData={setMovieData}/>
				{ flag ? <Movie movie={movie}/> : <MovieList movieData={movieData} fetchMovieData={fetchMovieData} setHasNext={setHasMore} setPageNum={fetchMovieData}/> }
				
			</div>
		</>
	);
}
