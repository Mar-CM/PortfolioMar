import photoMar from "../images/Mar (2) (1).jpeg";

function Header() {
	return (
		<>
			<header className="header">
				<nav></nav>
				<div className="photo-container">
					<img src={photoMar} alt="Foto Perfil" />
				</div>
				<div className="name">
					<div>
						<span className="text-letter">M</span>
						<span className="text-letter">a</span>
						<span className="text-letter">r</span>
					</div>
					<div>
						<span className="text-letter">C</span>
						<span className="text-letter">a</span>
						<span className="text-letter">b</span>
						<span className="text-letter">a</span>
						<span className="text-letter">l</span>
						<span className="text-letter">l</span>
						<span className="text-letter">e</span>
						<span className="text-letter">r</span>
						<span className="text-letter">o</span>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
