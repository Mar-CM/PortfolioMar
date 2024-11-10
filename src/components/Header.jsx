import logo from "../images/M4.jpg";
import { Link } from "react-router-dom";

function Header() {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
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
