import isEmpty from "just-is-empty";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import getMovie from "../../api/getMovie";

export default function SearchCard({ id, setLoading }) {
	const [movie, setMovie] = useState({});

	useEffect(() => {
		async function getSingleMovie() {
			const obj = {
				i: id,
			};
			const res = await getMovie(obj);
			if (res && res.Response === "True") {
				setMovie(res);
			}
		}
		getSingleMovie();

		return () => {
			setMovie({});
		};
	}, [id]);

	return (
		<>
			{!isEmpty(movie) && (
				<Link href={`/${movie.imdbID}`}>
					<a className="card shadow-md relative flex items-center rounded-lg overflow-hidden">
						<div className="self-stretch bg-gradient-to-b from-gray-500 to-gray-300 search-card-img-div">
							{movie.Poster && (
								<img src={movie.Poster} className="search-card-img" alt={movie.Title} />
							)}
						</div>
						<div className="info p-4 self-stretch">
							<p className="text-2xl font-medium mb-2 line-clamp-2">{movie.Title}</p>
							{movie.Director && (
								<p className="text-base leading-5 mb-2 line-clamp-2 font-medium">
									<span className="block font-normal text-gray-500">Directed By -</span>
									{movie.Director}
								</p>
							)}
							{movie.imdbRating && (
								<p className="text-base leading-5 mb-2 font-medium">
									<span className="block font-normal text-gray-500">IMDB</span>
									{movie.imdbRating}/10
								</p>
							)}
							{movie.Genre && (
								<p className="text-base leading-5 font-medium overflow-ellipsis overflow-hidden whitespace-nowrap w-32">
									<span className="block font-normal text-gray-500">Genre</span>
									{movie.Genre}
								</p>
							)}
						</div>
						<div className="more absolute cursor-pointer bottom-1 right-2">
							<span className="underline">more</span>
						</div>
					</a>
				</Link>
			)}
		</>
	);
}
