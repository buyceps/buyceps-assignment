import React from "react";
import Link from "next/link";
import getMovie from "../api/getMovie";
import isEmpty from "just-is-empty";
import SingleMoviePage from "../components/SingleMoviePage";

export default function SingleMovie(props) {
	return <SingleMoviePage {...props} />;
}

export async function getServerSideProps(ctx) {
	const { id } = ctx.query;
	let notFound = false;
	const obj = {
		i: id,
    plot: 'full'
	};
	let response = {};
	const res = await getMovie(obj);
	if (!isEmpty(res) && res.Response === "True") {
		response = res;
	} else {
		notFound = true;
	}
	return {
		notFound,
		props: {
			response,
			showLayout: false,
		},
	};
}
