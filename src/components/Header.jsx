import AboutMe from "./AboutMe";

function Header() {
	return (
		<>
			<header className="header">
				<h3 className="headerLogo">Mar Caballero</h3>
				<nav className="headerNav">
					<ul className="headerNav_list">
						<li>
							<a href="/AboutMe" className="headerNav_link">
								Sobre mí
							</a>
						</li>
						<li>
							<a href="/AboutMe" className="headerNav_link">
								Proyectos
							</a>
						</li>
						<li>
							<a href="/AboutMe" className="headerNav_link">
								Habilidades
							</a>
						</li>
						<li>
							<a href="/AboutMe" className="headerNav_link">
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header;
