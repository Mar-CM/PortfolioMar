import { Link } from "react-router-dom";

function Header() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<header className="header">
				<nav className="headerNav">
					<ul className="headerLogo">
						<li>
							<Link to="/" className=" headerLogo_name" onClick={scrollToTop}>
								Mar Caballero
							</Link>
						</li>
					</ul>
					<ul className="headerNav_list">
						<li>
							<Link to="/#aboutMe" className="headerNav_link">
								Sobre mí
							</Link>
						</li>
						<li>
							<Link to="/#project" className="headerNav_link">
								Proyectos
							</Link>
						</li>
						<li>
							<Link to="/#skills" className="headerNav_link">
								Habilidades
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								className="headerNav_link"
								onClick={scrollToTop}
							>
								Contacto
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
