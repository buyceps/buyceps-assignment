import React from "react";
import Explore from "./ExploreMovie";
import SingleMovie from "./SingleMovie";

export default function SingleMoviePage(props) {
	console.log(props);
	return (
		<div className="bg-gray-100">
			<SingleMovie movie={props.response} />
      <Explore />
		</div>
	);
}
