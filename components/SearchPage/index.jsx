import isEmpty from "just-is-empty";
import React, { useEffect, useRef, useState } from "react";
import getMovie from "../../api/getMovie";
import SearchBar from "../SearchBar";
import SearchCard from "../SearchCard";
import Spinner from "../Spinner";

export default function SearchPage(props) {
	const [movieList, setMovieList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [searchValues, setSearchValues] = useState({});
	const [hasMore, setHasMore] = useState(false);
	const [page, setPage] = useState(1);
	const loaderRef = useRef(null);

	async function handleSearch(values, isNew) {
		setSearchValues(values);
		if (isNew) {
			setMovieList([]);
			setPage(1);
		}
		setLoading(true);
		const res = await getMovie(values);
		if (!isEmpty(res) && res.Response === "True") {
			setMovieList((prev) => [...prev, ...res.Search.slice(0, 9)]);
			setError("");
			if (res.totalResults > res.Search.length && res.totalResults > movieList.length + 9 + page) {
				setHasMore(true);
			} else setHasMore(false);
		} else if (res.Response === "False") {
			setError(res.Error);
			setMovieList([]);
			setHasMore(false);
		}
		setLoading(false);
	}

	const handleObserver = (entities) => {
		const target = entities[0];
		if (target.isIntersecting) {
			setPage((page) => page + 1);
		}
	};

	useEffect(() => {
		var options = {
			root: null,
			rootMargin: "300px",
			threshold: 1.0,
		};
		// initialize IntersectionObserver
		// and attaching to Load More div
		const observer = new IntersectionObserver(handleObserver, options);
		if (loaderRef.current) {
			observer.observe(loaderRef.current);
		}

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		if (hasMore && page > 1) {
			const obj = { ...searchValues, page };
			handleSearch(obj);
		}
	}, [page]);

	return (
		<>
			<p className="text-center my-10 text-3xl font-medium">Explore more movies</p>
			<div className="boxed">
				<SearchBar handleQuery={handleSearch} />
			</div>
			<div className="search-result">
				{!loading && error && <p className="text-center text-xl font-bold">🙁 {error}</p>}
				<div className="grid grid-cols-1 gap-5 md:gap-8 md:grid-cols-3 my-10">
					{movieList &&
						movieList.length > 0 &&
						movieList.map((item, i) => <SearchCard key={item.imdbID + i} id={item.imdbID} />)}
				</div>
			</div>
			<div className="loading" ref={loaderRef}>
				{hasMore && (
					<div className="spinner-div h-32 flex items-center justify-center">
						<Spinner />
					</div>
				)}
			</div>
		</>
	);
}
