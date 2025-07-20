import React from 'react';
import { MainPage, CartPage } from '../pages/index.jsx';
import AppHeader from '../app-header/app-header.jsx';
import Background from './food-bg.jpg';

const App = () => {
	return (
		<div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
			<AppHeader total={50} />
			<MainPage />
			<CartPage />
		</div>
	)
}

export default App;