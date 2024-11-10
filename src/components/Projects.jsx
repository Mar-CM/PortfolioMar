import ricky from "../images/rick-morty.jpg";
import grogu from "../images/grogu.jpg";
import anime from "../images/anime.jpg";
import tarjetas from "../images/choripopins.jpg";

function Projects() {
	return (
		<>
			<section id="project" className="project">
				<h3 className="projectTitle">Proyectos</h3>
				<div className="project_container">
					<ul className="project_list">
						<li>
							<a
								href="https://mar-cm.github.io/pairprogramming-modulo3-GroguGame/"
								target="_blank"
							>
								<img className="projectPhoto" src={grogu} alt="grogu" />
								<p></p>
							</a>
						</li>
						<li>
							<a
								href="https://project-promo-w-module-4-team-3.vercel.app//"
								target="_blank"
							>
								<img className="projectPhoto" src={tarjetas} alt="tarjetas" />
								<p></p>
							</a>
						</li>
						<li>
							<a
								href="http://beta.adalab.es/modulo-3-evaluacion-final-Mar-CM/"
								target="_blank"
							>
								<img className="projectPhoto" src={ricky} alt="ricky" />
								<p></p>
							</a>
						</li>
						<li>
							<a
								href="http://beta.adalab.es/modulo-2-evaluacion-final-Mar-CM/"
								target="_blank"
							>
								<img className="projectPhoto" src={anime} alt="anime" />
								<p></p>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
}

export default Projects;
