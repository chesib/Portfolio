// SocialIcons.js
import React from "react";
import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

const SocialIcons = () => {
	return (
		<div className="social-icons">
			<a
				className="social-button"
				href="https://github.com/chesib"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaGithub />
			</a>
			<a
				className="social-button"
				href="https://www.linkedin.com/in/josemedinavarela"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaLinkedin />
			</a>
			<a className="social-button" href="mailto:chesibb@gmail.com">
				<FaGoogle />
			</a>
		</div>
	);
};

export default SocialIcons;
