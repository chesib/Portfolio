import React from "react";
import "../assets/card.scss";

const Cards = () => {
	return (
		<>
			<main className="page-content">
				<div className="card">
					<div className="content">
						<h2 className="title">React 1</h2>
						<p className="copy">
							successful completion and mastery of foundational
							concepts in React development.
						</p>
						<a
							href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/26511/aprobacion-modulos-cursos-b-learning-react-i-g10-14397.png"
							className="btn"
							target="_blank"
						>
							More Info
						</a>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h2 className="title">React 2</h2>
						<p className="copy">
							This course elevated my skills beyond the
							fundamentals, enabling me to architect efficient
							React applications.
						</p>
						<a
							href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/27435/aprobacion-modulos-cursos-b-learning-react-ii-g10-14397.png"
							className="btn"
							target="_blank"
						>
							More Info
						</a>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h2 className="title">Advanced CSS</h2>
						<p className="copy">
							more complex styling techniques and approaches to
							create sophisticated and visually appealing designs.
						</p>
						<a
							href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/24189/aprobacion-modulos-cursos-b-learning-css-avanzado-g10-14397.png"
							className="btn"
							target="_blank"
						>
							More Info
						</a>
					</div>
				</div>
				<div className="card">
					<div className="content">
						<h2 className="title">JavaScript</h2>
						<p className="copy">
							This certification covered a range of essential
							concepts, enabling me to develop dynamic and
							interactive web applications.
						</p>
						<a
							href="https://desafiosdev.s3.amazonaws.com/uploads/certification/image/25652/aprobacion-modulos-cursos-b-learning-javascript-para-la-web-g10-14397.png"
							className="btn"
							target="_blank"
						>
							More Info
						</a>
					</div>
				</div>
			</main>
		</>
	);
};

export default Cards;
