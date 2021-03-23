import Head from "next/head";
import dynamic from "next/dynamic";
import Carousel from "../components/Carousel";
const SearchPage = dynamic(() => import("../components/SearchPage"));

export default function Home() {
	return (
		<>
			<Head>
				<title>OMDB movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Carousel />
			<SearchPage />
		</>
	);
}
