import React from 'react';
import { MainPage, CartPage } from '../pages/index.jsx';
import AppHeader from '../app-header/app-header.jsx';
import WithRestoService from '../hoc/with-resto-service.jsx';
import Background from './food-bg.jpg';

const App = ({ RestoService }) => {
	console.log(RestoService.getMenu());
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<AppHeader total={50} />
			<MainPage />
			<CartPage />
		</div>
	)
}

export default WithRestoService()(App);