import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router";
import { ErrorBoundry, App } from "./components";
import { RestoServiceContext } from "./context";
import { store } from "./store.jsx";
import RestoService from "./services/resto-service.jsx";

// Объект для вывода
const root = document.querySelector("#root")
	|| document.querySelector(".wrapper");

const restoService = new RestoService();

// Main rendering
ReactDOM.createRoot(root).render(
	// <React.StrictMode>
	<Provider store={store}>
		<ErrorBoundry>
			<RestoServiceContext.Provider value={restoService}>
				<Router>
					<App />
				</Router>
			</RestoServiceContext.Provider>
		</ErrorBoundry>
	</Provider>
	// </React.StrictMode>
);