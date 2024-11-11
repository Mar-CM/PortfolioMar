import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Footer from "./Footer.jsx";

function Contact() {
	const [btnText, setBtnText] = useState("ENVIAR");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [popupMessage, setPopupMessage] = useState("");
	const [formValid, setFormValid] = useState(false);
	const form = useRef();

	const handleInputChange = () => {
		const { user_name, user_email, user_phone, message } = form.current;
		setFormValid(
			user_name.value.trim() !== "" &&
				user_email.value.trim() !== "" &&
				user_phone.value.trim() !== "" &&
				message.value.trim() !== ""
		);
	};

	const sendEmail = (e) => {
		e.preventDefault();

		setIsSubmitting(true);
		setBtnText("Enviando...");

		emailjs
			.sendForm("Mar_Portfolio", "template_b5kyo64", form.current, {
				publicKey: "3N0lAh0dJLSqqDwbp",
			})
			.then(
				() => {
					setBtnText("ENVIAR");
					setPopupMessage("Tu mensaje se ha enviado correctamente");
					form.current.reset();
					setFormValid(false);

					setTimeout(() => {
						setPopupMessage("");
					}, 3000);
				},
				(error) => {
					setBtnText("ENVIAR");
					setPopupMessage("Error al enviar el mensaje. Intenta nuevamente.");
				}
			)
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	return (
		<>
			<div className="containerContact">
				{popupMessage && <div className="popupMessage">{popupMessage}</div>}

				<section className="contact">
					<div className="contactBox">
						<h2 className="contactTitle">¿Charlamos?</h2>
						<p className="contactText">
							Si tienes alguna idea, pregunta o quieres colaborar en algo
							increíble, ¡escríbeme!
						</p>
						<p className="contactText">
							Estoy siempre abierta a nuevos proyectos y retos.
						</p>
						<form className="contactForm" ref={form} onSubmit={sendEmail}>
							<label htmlFor="contactForm_name">
								<input
									className="contactForm_input"
									type="text"
									id="user_name"
									name="user_name"
									placeholder="Nombre *"
									onChange={handleInputChange}
									required
								/>
							</label>
							<label htmlFor="contactForm_email">
								<input
									className="contactForm_input"
									type="text"
									id="user_email"
									name="user_email"
									placeholder="Correo electrónico *"
									onChange={handleInputChange}
									required
								/>
							</label>
							<label htmlFor="contactForm_phone">
								<input
									className="contactForm_input"
									type="tel"
									id="user_phone"
									name="user_phone"
									placeholder="Móvil *"
									onChange={handleInputChange}
									required
								/>
							</label>
							<label htmlFor="contactForm_message">
								<textarea
									className="contactForm_input message"
									id="message"
									name="message"
									placeholder="Cuéntame tu idea *"
									onChange={handleInputChange}
									required
								/>
							</label>
							<input
								className="contactButton"
								type="submit"
								value={btnText}
								disabled={!formValid || isSubmitting}
							/>
						</form>
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}

export default Contact;
