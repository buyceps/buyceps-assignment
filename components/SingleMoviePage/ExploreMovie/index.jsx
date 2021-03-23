import React from "react";
import SliderItem from "../../Carousel/SliderItem";
import SearchCard from "../../SearchCard";

export default function Explore({ exploreMovies }) {
	return (
		<div className="boxed py-10">
			<p className="mb-10 font-bold text-3xl text-gray-700">Explore more movies</p>
			<div className="grid grid-cols-1  gap-5 md:gap-8 md:grid-cols-3">
				{exploreMovies &&
					exploreMovies.length > 0 &&
					exploreMovies.map((item, i) => <SearchCard key={item + i} id={item} />)}
			</div>
		</div>
	);
}
