import React, { useEffect, useState } from "react";

export default function SearchBar({movieList, setmovieList}) {
	const [title, settitle] = useState("");
	const [pageNum, setpageNum] = useState(1);
	const [totalResult, settotalResult] = useState("");
	const [dataLoaded, setdataLoaded] = useState(false);
	

	const handelClick = () => {
		setdataLoaded(true)
	}

	useEffect(() => {
		let totalPageResult = movieList.length;
		if(totalResult === totalPageResult){
			return;
		}
		if(Number(title) === 0){
			console.log("no input")
		}else{
			fetch (`http://www.omdbapi.com/?s=${title}&page=${pageNum}&apikey=8fcd8000`)
				.then(response => response.json())
				.then(result => {
					console.log(result);
					settotalResult(result.totalResults);
					let newArr = result.Search;
					let newList = [...movieList, ...newArr];
					setmovieList(newList);
				})
				window.onscroll = function(){
					if(
						window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight
					){
						scrollPage()
					}
				}
		}
		
	}, [pageNum, dataLoaded])

	const scrollPage = () => {
		setpageNum(pageNum + 1);
	}

	

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
						onInput = {(e) => settitle(e.target.value)}
					/>
					<input
						type="search"
						name="y"
						className="py-2 text-sm text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="Year"
						autoComplete="off"
						onChange = {(e) => setyear(e.target.value)}
					/>
					<input
						type="search"
						name="i"
						className="py-2 text-sm  text-gray-600 bg-gray-100 rounded-md px-2  focus:outline-none focus:ring focus:border-purple-600 focus:bg-white focus:text-gray-900"
						placeholder="ID"
						autoComplete="off"
						onChange = {(e) => setmovieID(e.target.value)}
					/>
					<button
						type="submit"
						className=" search-btn text-white font-bold p-1 rounded col-span-2 md:col-auto bg-yellow-400 focus:outline-none focus:shadow-outline"
						onClick = {handelClick}>
						Search
					</button>
				</div>
			</form>
		</div>
	);
}
