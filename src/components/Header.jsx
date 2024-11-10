import logo from "../images/M4.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		closeMenu();
	};

	return (
		<>
			<header className="header">
				<nav className="headerNav">
					<ul className="headerNav_Logo">
						<li>
							<Link to="/" onClick={scrollToTop}>
								<img src={logo} alt="Logo Mar" className="headerLogo_img" />
							</Link>
						</li>
					</ul>
					<div className="hamburger" onClick={toggleMenu}>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<ul className={`headerNav_list ${menuOpen ? "show" : ""}`}>
						<li>
							<Link
								to="/#aboutMe"
								className="headerNav_link"
								onClick={scrollToTop}
							>
								Sobre mí
							</Link>
						</li>
						<li>
							<Link
								to="/#project"
								className="headerNav_link"
								onClick={scrollToTop}
							>
								Proyectos
							</Link>
						</li>
						<li>
							<Link
								to="/#skills"
								className="headerNav_link"
								onClick={scrollToTop}
							>
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
