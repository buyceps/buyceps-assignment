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
			</div>
		</>
	);
}
