import "../scss/App.scss";

import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import AboutMe from "./AboutMe.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Footer from "./Footer.jsx";

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<AboutMe />
				<Projects />
				<Skills />
			</main>
			<Footer />
		</>
	);
}

export default App;
