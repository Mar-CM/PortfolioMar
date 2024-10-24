import "../scss/App.scss";

import Header from "./Header.jsx";
import Main from "./Main.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import { Route, Routes } from "react-router-dom";

function App() {
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
