// Skills.js
import React from "react";

const Skills = () => {
	return (
		<div className="skills-container">
			<SkillItem
				imageSrc="js-logo.png"
				title="JavaScript"
				description="Lenguaje de programación para desarrollo web."
			/>
			<SkillItem
				imageSrc="HTML5.png"
				title="HTML5"
				description="Lenguaje de marcado para estructurar contenido web."
			/>
			<SkillItem
				imageSrc="css-logo.png"
				title="CSS"
				description="Lenguaje de estilo para diseñar páginas web."
			/>
			<SkillItem
				imageSrc="react-logo.png"
				title="ReactJS"
				description="Biblioteca de JavaScript para construir interfaces de usuario."
			/>
			<SkillItem
				imageSrc="bootstrap-logo.png"
				title="Bootstrap"
				description="Framework de diseño para desarrollar rápidamente sitios web."
			/>
			<SkillItem
				imageSrc="tailwind-logo.png"
				title="Tailwind CSS"
				description="Framework de utilidad CSS para diseñar interfaces modernas."
			/>
		</div>
	);
};

const SkillItem = ({ name, imageSrc, title, description }) => {
	return (
		<div className="skill-item">
			<img src={imageSrc} alt={name} />
		</div>
	);
};

export default Skills;
