import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";

function Footer() {
	return (
		<footer>
			<div className="containerFooter">
				<div className="containerFooter_Icons">
					<a
						target="_blank"
						href="https://www.linkedin.com/in/mar-caballero-moryno-511398204/"
					>
						<img src={linkedin} alt="Linkedin icon" className="footerIcon" />
					</a>
					<a target="_blank" href="https://github.com/Mar-CM">
						<img src={github} alt="Github icon" className="footerIcon" />
					</a>
				</div>
				<span>© 2024 Portfolio | Mar Caballero</span>
			</div>
		</footer>
	);
}

export default Footer;
