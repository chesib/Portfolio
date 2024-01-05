import "./assets/App.css";
import { BrowserRouter } from "react-router-dom";

import GlobalProvider from "./context/GlobalContext";
import Router from "./router/Router";
import Footer from "./components/Footer";

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Router></Router>
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
