import React from "react";
import dynamic from "next/dynamic";
const Explore = dynamic(() => import("./ExploreMovie"));
const SingleMovie = dynamic(() => import("./SingleMovie"));

export default function SingleMoviePage(props) {
	return (
		<div className="bg-gray-200">
			<SingleMovie movie={props.response} />
			<Explore exploreMovies={props.exploreMovies} />
		</div>
	);
}
