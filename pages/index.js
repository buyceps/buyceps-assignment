import Head from "next/head";
import Carousel from "../components/Carousel";

export default function Home() {
	return (
		<>
			<Head>
				<title>OMDB movies</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Carousel />
		</>
	);
}
