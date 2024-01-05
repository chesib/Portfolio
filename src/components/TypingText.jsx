import React from "react";
import { motion, useAnimation } from "framer-motion";

const TypingText = ({ text }) => {
	const controls = useAnimation();
	const [displayedText, setDisplayedText] = React.useState("");

	const animateText = async () => {
		// Escribir
		for (let i = 0; i <= text.length; i++) {
			setDisplayedText(text.slice(0, i));
			await controls.start({
				opacity: 1,
				x: 0,
				transition: { duration: 0.1 },
			});
			await new Promise((resolve) => setTimeout(resolve, 50)); // Pausa breve entre letras
		}

		// Esperar un momento
		await new Promise((resolve) => setTimeout(resolve, 3000));

		// Borrar
		for (let i = text.length; i >= 0; i--) {
			setDisplayedText(text.slice(0, i));
			await controls.start({
				opacity: 1,
				x: 0,
				transition: { duration: 0.1 },
			});
			await new Promise((resolve) => setTimeout(resolve, 50)); // Pausa breve entre letras
		}

		// Reiniciar el bucle
		animateText();
	};

	React.useEffect(() => {
		animateText();
	}, []);

	return (
		<motion.div
			className="typing-text" // Clase para aplicar estilos CSS
			initial={{ opacity: 0, x: -10 }}
			animate={controls}
		>
			{displayedText}
		</motion.div>
	);
};

export default TypingText;
