import React from "react";
import dynamic from "next/dynamic";
import getMovie from "../api/getMovie";
import isEmpty from "just-is-empty";
import Head from "next/head";

const SingleMoviePage = dynamic(() => import ("../components/SingleMoviePage"))

export default function SingleMovie(props) {
	return (
		<>
			<Head>
				<title>{props.response.Title}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SingleMoviePage {...props} />
		</>
	);
}

export async function getServerSideProps(ctx) {
	const { id } = ctx.query;
	let notFound = false;
	const SingleMovieQuery = {
		i: id,
		plot: "full",
	};
	let response = {};
	let exploreMovies = [];
	let year;
	const res = await getMovie(SingleMovieQuery);
	if (!isEmpty(res) && res.Response === "True") {
		response = res;
		year = response.Year;
	} else {
		notFound = true;
	}

	if (year) {
		const yearQuery = {
			y: year,
			s: response.Genre.split(",")[0],
		};
		const yearRes = await getMovie(yearQuery);
		exploreMovies = yearRes.Search.slice(0, 3).map((item) => item.imdbID);
	}

	return {
		notFound,
		props: {
			response,
			exploreMovies,
			showLayout: false,
		},
	};
}
