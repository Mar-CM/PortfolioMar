import photoMar from "../images/Mar (2) (1).jpeg";
import CVMar from "../download/Mar Caballero CV.pdf";

function Hero() {
	return (
		<>
			<section className="hero">
				<div className="ball ball1"></div>
				<div className="ball ball2"></div>
				<div className="heroPhoto">
					<img src={photoMar} alt="Foto Perfil" />
				</div>
				<div className="heroName">
					<div className="heroName_letter">
						<span className="text-letter">F</span>
						<span className="text-letter">u</span>
						<span className="text-letter">l</span>
						<span className="text-letter">l</span>
					</div>
					<div className="heroName_letter">
						<span className="text-letter">S</span>
						<span className="text-letter">t</span>
						<span className="text-letter">a</span>
						<span className="text-letter">c</span>
						<span className="text-letter">k</span>
					</div>
					<div className="heroName_letter">
						<span className="text-letter">D</span>
						<span className="text-letter">e</span>
						<span className="text-letter">v</span>
						<span className="text-letter">e</span>
						<span className="text-letter">l</span>
						<span className="text-letter">o</span>
						<span className="text-letter">p</span>
						<span className="text-letter">e</span>
						<span className="text-letter">r</span>
					</div>
					<div className="heroText">
						<h4 className="heroText_name">
							¡Hola! Soy Mar, tu desarrolladora web junior favorita.
						</h4>
						<p>¡Bienvenid@ a mi pequeño rincón en el ciberespacio!</p>
						<p>
							Aquí puedes hacer un vistazo a mis habilidades en front-end y
							explorar los proyectos que he creado. Estoy súper emocionada de
							compartir mi viaje contigo, así que ponte cómodo y disfruta del
							recorrido. ¡Espero que te guste lo que ves!
						</p>
					</div>
					<a href={CVMar} download="MarCaballeroCV.pdf" className="buttonCV">
						Descargar CV
					</a>
				</div>
			</section>
		</>
	);
}

export default Hero;
