import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaFolderOpen } from "react-icons/fa";

import "../assets/Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo-container">
				<a href="#home" className="nav-link">
					<img src="cvv.png" alt="Logo" className="logo" />
				</a>
			</div>
			<ul className="nav-list">
				<li className="nav-item">
					<a className="nav-link" href="#sobreMi">
						Sobre mi
					</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#portafolio">
						Poryectos
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
