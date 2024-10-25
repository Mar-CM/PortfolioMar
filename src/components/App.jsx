import "../scss/App.scss";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
			const section = document.querySelector(location.hash);
			if (section) {
				section.scrollIntoView({ behavior: "smooth" });
			} else {
				window.scrollTo({ top: 0, behavior: "smooth" });
			}
		}
	}, [location]);

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
