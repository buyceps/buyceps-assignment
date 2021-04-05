import Head from "next/head";
import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";
import getMovie from "../api/getMovie";
const SearchPage = dynamic(() => import("../components/SearchPage"));

const movieList = [
	{
		id: "tt0816692",
		path: "/interstellar.webp",
	},
	{
		id: "tt0451279",
		path: "/wonderWoman.webp",
	},
	{
		id: "tt0974015",
		path: "/justiceLeague.webp",
	},
];

export default function Home(props) {
	return (
		<>
			<Head>
				<title>OMDB movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Carousel movie={props.movie} />
			<SearchPage />
		</>
	);
}

export async function getStaticProps(ctx) {
	const obj1 = {
		i: "tt0816692",
	};
	const obj2 = {
		i: "tt0451279",
	};
	const obj3 = {
		i: "tt0974015",
	};
	const res1 = await getMovie(obj1);
	const res2 = await getMovie(obj2);
	const res3 = await getMovie(obj3);

	const movie = [
		{
			movie: res1,
			path: "/interstellar.webp",
		},
		{
			movie: res2,
			path: "/wonderWoman.webp",
		},
		{
			movie: res3,
			path: "/justiceLeague.webp",
		},
	];
	return {
		props: {
			movie,
		},
	};
}
