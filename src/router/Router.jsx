import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";

import NotFound404 from "../views/Notfound404";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="*" element={<NotFound404 />} />
		</Routes>
	);
};

export default Router;
