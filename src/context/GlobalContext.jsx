import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
	const state = {};

	return (
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
