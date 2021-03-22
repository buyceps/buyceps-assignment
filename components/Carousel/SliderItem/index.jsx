import isEmpty from "just-is-empty";
import React, { useState } from "react";
import getSingleMovie from "../../../api/getSingleMovie";

export default function SliderItem({ bgPath, id }) {
	const [movie, setMovie] = useState({});

	React.useEffect(() => {
		async function getMovie() {
			const obj = {
				i: id,
			};
			const res = await getSingleMovie(obj);
			if (res && res.Response === "True") {
				setMovie(res);
			}
		}
		getMovie();

		return () => {
			setMovie({});
		};
	}, [id]);

	return (
		<>
			{!isEmpty(movie) && (
				<div className="carousel-bg h-full relative">
					<img className="object-centers carousel-img" src={bgPath} alt="" />
					<div className="backdrop-carousel absolute w-full h-full  top-0 left-0"></div>
					<div className="absolute bottom-0 w-4/5 mx-auto left carousel-content">
						<p className="text-white">
							<span className="heading text-4xl md:text-5xl  font-bold">{movie.Title}</span>
							<span className="year ml-2 text-base font-medium">({movie.Year})</span>
						</p>
						{movie.Director && (
							<p className="text-white text-sm mb-4">Directed by - {movie.Director}</p>
						)}
						<div className="info flex items-center gap-x-5">
							<div className="rating text-yellow-400 mb-5  flex place-items-center">
								<div className="font-medium text-sm leading-3">
									<p className=" font-bold">
										<span className="text-3xl">{movie.imdbRating}</span>/10
									</p>
									IMDB
								</div>
							</div>
							<div className="desc text-white ">
								<p className="desc-text mb-2 text-sm md:text-base max-w-md">"{movie.Plot}</p>
								<button className="btn transition duration-300 hover:bg-white hover:text-gray-900 px-2 py-1 border-2 rounded-md">
									Know more
								</button>
							</div>
						</div>
						<div className="md:w-3/4 metadata flex gap-x-2 relative text-white text-xs md:text-sm my-3 whitespace-normal  divide-x divide-gray-200">
							{movie.Runtime && <p className="time">{movie.Runtime}</p>}
							{movie.Genre && (
								<p className="genre pl-2">{movie.Genre.split(",").slice(0, 3).join(", ")}</p>
							)}
							{movie.Language && (
								<p className="language pl-2">{movie.Language.split(",").slice(0, 3).join(", ")}</p>
							)}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
