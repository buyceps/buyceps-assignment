import React, { useEffect, useState } from "react";

export default function SearchBar(props) {

	return (
		<div className="relative shadow-lg my-10 p-5 rounded-md mx-5">
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}>
				<div className="field-group grid grid-cols-2 md:grid-cols-4 gap-4 ">
					<input
						type="search"
						name="s"
						className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Search Title"
						autoComplete="off"
					/>
					<input
						type="search"
						name="y"
						className="py-2 text-sm text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Year"
						autoComplete="off"
					/>
					<input
						type="search"
						name="i"
						className="py-2 text-sm  text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="ID"
						autoComplete="off"
					/>
					<button
						type="submit"
						className=" search-btn text-white font-bold p-1 rounded col-span-2 md:col-auto bg-yellow-400 focus:outline-none focus:shadow-outline">
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
