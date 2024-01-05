import React from "react";

const SobreMi = () => {
	return (
		<>
			{" "}
			<h2 className="sobre-mi">About me.</h2>
			<div className="sobre-mi-container">
				<div className="imagen-container">
					<img src="pcphoto.webp" alt="Mi Fotografía" />
				</div>
				<div className="texto-container">
					<p>
						Certified Frontend Developer specializing in React, I
						thrive on tackling technical challenges with innovative
						technologies. My training at Desafío Latam forms the
						backbone of my skills. Proficient in Bootstrap,
						Tailwind, and JavaScript, my creative approach is
						evident in my practical and professional contributions
						to modern web development. I approach projects
						strategically, ensuring alignment with the ever-evolving
						industry landscape.
					</p>
				</div>
			</div>
		</>
	);
};

export default SobreMi;
