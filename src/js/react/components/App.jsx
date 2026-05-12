import React from 'react';
import { Routes, Route } from "react-router";
import { MenuList, CartPage, Header } from '../components';
import "../../../scss/style.scss";

export const App = () => {
	return (
		<div className="app">
			<Header />
			<main className="page">
				<div className="page__container">
					<section className="menu">
						<Routes>
							<Route path="/" element={<MenuList />} />
							<Route path="/RESTO/" element={<MenuList />} />
							<Route path="/home" element={<MenuList />} />
							<Route path="/cart/" element={<CartPage />} />
						</Routes>
					</section>
				</div>
			</main>
			<div className="app__img">
				<img src="img/food-bg.jpg" alt="Menu-background" />
			</div>
		</div>
	);
};