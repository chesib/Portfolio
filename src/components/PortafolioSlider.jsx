import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";

const PortfolioSlider = ({ proyectos }) => {
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Slider {...settings}>
			{proyectos.map((proyecto) => (
				<div key={proyecto.id} className="proyecto-card">
					<div className="card-content">
						<img src={proyecto.imagen} alt={proyecto.nombre} />
						<div className="text-overlay">
							<h3 className="proyectos-tittle">
								{proyecto.nombre}
							</h3>
							<p>{proyecto.descripcion}</p>{" "}
							<div className="enlaces">
								<a
									href={proyecto.giturl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub /> Ver en GitHub
								</a>
								<a
									href={proyecto.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									Ver más
								</a>
							</div>
						</div>
					</div>
				</div>
			))}
		</Slider>
	);
};

export default PortfolioSlider;
