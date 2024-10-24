import AboutMe from "./AboutMe";
import { Link } from "react-router-dom";

function Header() {
	return (
		<>
			<header className="header">
				<nav className="headerNav">
					<ul className="headerNav_list">
						<li>
							<Link to="/" className="headerLogo headerNav_link">
								Mar Caballero
							</Link>
						</li>
						<li>
							<Link to="/aboutme" className="headerNav_link">
								Sobre mí
							</Link>
						</li>
						<li>
							<Link to="/project" className="headerNav_link">
								Proyectos
							</Link>
						</li>
						<li>
							<Link to="/skills" className="headerNav_link">
								Habilidades
							</Link>
						</li>
						<li>
							<Link to="/contact" className="headerNav_link">
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
