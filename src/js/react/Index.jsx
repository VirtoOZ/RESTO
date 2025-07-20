import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/app.jsx"
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundry from "./components/error-boundry/error-boundry.jsx";
import store from "./store.jsx";
import RestoService from "./services/resto-service.jsx";
import RestoServiceContext from "./components/resto-service-context/resto-service-context.jsx";

// Объект для вывода
const root = document.querySelector("#root")
	? document.querySelector("#root")
	: document.querySelector(".wrapper");

const restoService = new RestoService();

// Main rendering
ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<ErrorBoundry>
				<RestoServiceContext.Provider value={restoService}>
					<Router>
						<App />
					</Router>
				</RestoServiceContext.Provider>
			</ErrorBoundry>
		</Provider>
	</React.StrictMode>
);
