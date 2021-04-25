import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../components/Layout";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";

Router.onRouteChangeStart = url => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
				/>
			</Head>
			<Layout showLayout={pageProps.showLayout}>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
