import React from "react";
import ScrollToTop from "react-scroll-to-top";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children, showLayout = true }) {
	return (
		<div className="body">
			<ScrollToTop
				smooth
				top="1000"
				style={{ borderRadius: "50%", padding: "8px", background: "#FCD34D" }}
			/>
			{showLayout && <Navbar />}
			<main>{children}</main>
			{showLayout && <Footer />}
		</div>
	);
}
