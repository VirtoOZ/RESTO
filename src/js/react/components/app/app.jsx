import React from 'react';
import { MainPage, CartPage } from '../pages/index.jsx';
import AppHeader from '../app-header/app-header.jsx';
import Background from './food-bg.jpg';
import { Routes, Route } from "react-router";

const App = () => {
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<AppHeader />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/menu" element={<MainPage />} />
				<Route path="/cart/" element={<CartPage />} />
			</Routes>
		</div>
	)
}

export default App;