import React from "react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer-container">
			<div className="redes-container">
				<a
					href="https://github.com/chesib"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="icon" />
				</a>
				<a
					href="https://www.linkedin.com/in/josemedinavarela/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin className="icon" />
				</a>
			</div>
			<div className="contacto-container">
				<p>chesibb@gmail.com</p>
			</div>
		</footer>
	);
};

export default Footer;
