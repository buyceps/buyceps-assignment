import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
	return (
		<div className="body">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
