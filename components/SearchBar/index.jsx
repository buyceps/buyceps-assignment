import React, { useEffect, useState } from "react";

export default function SearchBar(props) {
	const [fieldValues, setFieldValues] = useState({
		s: "",
		i: "",
		y: "",
	});
	const [error, setError] = useState("");

	function handleInput(target) {
		const values = { ...fieldValues, [target.name]: target.value };
		setFieldValues(values);
	}

	function handleSearch() {
		const errors = {};
		Object.entries(fieldValues).forEach(([key, value]) => {
			if (!value) {
				errors[key] = true;
			}
		});
		if (errors.s && errors.i && errors.y) {
			setError("at least one field is required");
			return;
		} else if (errors.s && errors.i) {
			setError("title or year is required");
			return;
		} else setError("");
		props.handleQuery(fieldValues, true);
	}

	return (
		<div className="relative shadow-lg my-10 p-5 rounded-md mx-5">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					handleSearch();
				}}>
				<div className="field-group grid grid-cols-2 md:grid-cols-4 gap-4 ">
					<input
						value={fieldValues.search}
						onChange={(e) => {
							handleInput(e.target);
						}}
						type="search"
						name="s"
						className="py-2 text-sm col-span-2 md:col-auto text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Search Title"
						autoComplete="off"
					/>
					<input
						value={fieldValues.year}
						onChange={(e) => {
							handleInput(e.target);
						}}
						type="search"
						name="y"
						className="py-2 text-sm text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Year"
						autoComplete="off"
					/>
					<input
						value={fieldValues.id}
						onChange={(e) => {
							handleInput(e.target);
						}}
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
				{error && <span className="text-red-600 text-sm capitalize mt-1">😐 {error}</span>}
			</form>
		</div>
	);
}
