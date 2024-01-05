import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import TypingText from "../components/TypingText";
import SocialIcons from "../components/SocialButtons";
import SobreMi from "../components/SobreMi";
import Skills from "../components/Skills";
import PortfolioSlider from "../components/PortafolioSlider";
import Cards from "../components/Cards";

const Home = () => {
	const cvLink =
		"https://drive.google.com/drive/folders/1FvJ3RKWPHDzq-ZFVqvUIpUA0WCsgWTJv?usp=drive_link";

	const proyectos = [
		{
			id: 1,
			tipo: "ecommerce",
			nombre: "Pizza Mamamia",
			giturl: "https://github.com/chesib/PizzaMenu",
			url: "https://pizzamenudisplay.netlify.app",
			imagen: "pizzamenu.png",
			descripcion:
				"I created an efficient system that enables a pizzeria's customers to place online orders seamlessly and customize them effortlessly—from selecting ingredients to the timely delivery of delicious pizzas.",
		},
		{
			id: 2,
			tipo: "Red social",
			nombre: "RecetAPP",
			giturl: "https://github.com/paaolaola/proyecto-final-gary-chesi-pao",
			url: "https://magenta-pika-e54801.netlify.app",
			imagen: "recetapp.jpg",
			descripcion:
				"I developed a social network tailored for cooking enthusiasts, where users can share, discover, and explore a variety of homemade recipes, fostering global culinary connection and inspiration.",
		},
		{
			id: 3,
			tipo: "informacion",
			nombre: "Feriados Nacionales",
			giturl: "https://github.com/chesib/PruebaReact1",
			url: "https://animated-narwhal-e51b76.netlify.app",
			imagen: "feriados.jpg",
			descripcion:
				"I created an interactive calendar highlighting national holidays, offering detailed information on each celebration. It facilitates annual planning and provides an enriching cultural insight into the traditions associated with each festivity.",
		},
	];

	const [scrollY, setScrollY] = useState(0);

	// Configuración de animación con react-spring para la introducción

	const introAnimation = useSpring({
		opacity: 1,
		transform: "translateY(0)",
		config: config.gentle,
	});

	const LowerAnimation = useSpring({
		opacity: scrollY > 10 ? 1 : 0,
		transform: scrollY > 0 ? "translateY(0)" : "translateY(10px)",
		config: config.gentle,
	});

	// Configuración de animación con react-spring para las habilidades
	const skillsAnimation = useSpring({
		opacity: scrollY > 200 ? 1 : 0,
		transform: scrollY > 200 ? "translateX(0)" : "translateX(20px)", // Cambiado de translateY a translateX
		config: config.gentle,
	});
	const projectAnimation = useSpring({
		opacity: scrollY > 500 ? 1 : 0,
		transform: scrollY > 500 ? "translateY(0)" : "translateY(20px)",
		config: config.gentle,
	});
	const CardAnimation = useSpring({
		opacity: scrollY > 1000 ? 1 : 0,
		transform: scrollY > 1000 ? "translateX(0)" : "translateX(20px)",
		config: config.gentle,
	});

	// Manejar el evento de scroll
	const handleScroll = () => {
		setScrollY(window.scrollY);
	};
	useEffect(() => {
		setScrollY(window.scrollY);
	}, []);

	// Agregar el evento de scroll al montar el componente
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div id="home" className="home-container">
				<div className="text-container">
					<animated.h1 style={introAnimation}>
						¡Hello,
						<br /> i'm{" "}
						<span className="nombre-azul">Jose Medina</span>!
					</animated.h1>
					<TypingText
						text="
Dedicated Frontend Developer passionate about crafting compelling web experiences."
					/>
					<div className="button-container">
						<a
							href={cvLink}
							target="_blank"
							rel="noopener noreferrer"
							className="download-button"
						>
							Download cv
						</a>
					</div>
					<div className="social-icons-container">
						<SocialIcons />
					</div>
				</div>
				<div className="img-container">
					<img src="jsjm.png" alt="Jose Medina" />
				</div>
			</div>
			<div id="sobreMi">
				<animated.div style={LowerAnimation}>
					<SobreMi />
				</animated.div>
			</div>
			<div id="habilidades">
				<animated.div style={skillsAnimation}>
					<h2 className="sobre-mi">My Skills.</h2>
					<Skills />
				</animated.div>
			</div>
			<div id="portafolio">
				<animated.div style={projectAnimation}>
					<h1 className="sobre-mi">My last projects.</h1>
					<PortfolioSlider proyectos={proyectos} />
				</animated.div>
			</div>
			<div id="portafolio">
				<animated.div style={CardAnimation}>
					<h1 className="sobre-mi">My Certificates</h1>
					<Cards></Cards>
				</animated.div>
			</div>
		</>
	);
};

export default Home;
