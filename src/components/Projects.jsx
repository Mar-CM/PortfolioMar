import ricky from "../images/rick-morty.jpg";
import grogu from "../images/grogu.jpg";
import anime from "../images/anime.jpg";
import tarjetas from "../images/choripopins.jpg";

function Projects() {
	return (
		<>
			<section id="project" className="project">
				<h3 className="projectTitle">Proyectos</h3>
				<div className="projectPhoto_container">
					<img className="projectPhoto" src={grogu} alt="grogu" />
					<img className="projectPhoto" src={tarjetas} alt="tarjetas" />
					<img className="projectPhoto" src={ricky} alt="ricky" />
					<img className="projectPhoto" src={anime} alt="anime" />
				</div>
			</section>
		</>
	);
}

export default Projects;
