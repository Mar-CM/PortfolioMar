import Footer from "./Footer.jsx";

function Contact() {
	return (
		<>
			<div className="containerContact">
				<section className="contact">
					<div className="contactBox">
						<h2 className="contactTitle">¿Charlamos?</h2>
						<p>
							Si tienes alguna idea, pregunta o quieres colaborar en algo
							increíble, ¡escríbeme!
						</p>
						<p>Estoy siempre abierta a nuevos proyectos y retos.</p>
						<form className="contactForm">
							<label htmlFor="contactForm_name">
								<input
									className="contactForm_input"
									type="text"
									id="name"
									name="name"
									placeholder="Nombre"
								/>
							</label>
							<label htmlFor="contactForm_email">
								<input
									className="contactForm_input"
									type="text"
									id="email"
									name="email"
									placeholder="Correo electrónico"
								/>
							</label>
							<label htmlFor="contactForm_phone">
								<input
									className="contactForm_input"
									type="tel"
									id="phone"
									name="phone"
									placeholder="Móvil"
								/>
							</label>
							<label htmlFor="contactForm_message">
								<input
									className="contactForm_input message"
									type="text"
									id="message"
									name="message"
									placeholder="Cuéntame tu idea"
								/>
							</label>
							<button className="contactButton">ENVIAR</button>
						</form>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Contact;
