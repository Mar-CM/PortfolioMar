import React, { useState } from "react";

function Skills() {
	const [flipped, setFlipped] = useState([false, false, false]);

	const toggleFlip = (index) => {
		setFlipped(flipped.map((flip, i) => (i === index ? !flip : flip)));
	};

	const skills = [
		{
			title: "Frontend",
			logos: ["HTML5", "CSS3", "SASS", "JavaScript", "React"],
		},
		{
			title: "Backend",
			logos: [
				"Node.js",
				"Nodemon",
				"Express.JS",
				"MYSQL",
				"MongoDB",
				"Postman",
			],
		},
		{
			title: "Herramientas",
			logos: ["Git", "GitHub", "VSCode", "Slack"],
		},
	];

	return (
		<section id="skills" className="skills">
			<h3 className="skillsTitle">Habilidades</h3>
			<div className="skillsContainer">
				{skills.map((skill, index) => (
					<div
						key={index}
						className={`skillsCard ${flipped[index] ? "flipped" : ""}`}
						onClick={() => toggleFlip(index)}
					>
						<div className="skillsCard-Front">
							<h4>{skill.title}</h4>
						</div>
						<div className="skillsCard-Back">
							<ul>
								{skill.logos.map((logo, i) => (
									<li key={i}>{logo}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default Skills;
