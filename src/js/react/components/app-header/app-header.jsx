import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { connect } from 'react-redux';

const AppHeader = ({ total, price }) => {
	return (
		<header className="header">
			<Link to='/' className="header__logo">RESTO</Link>
			<Link to='/menu/' className="header__link">Menu</Link>
			<Link to='/cart/' className="header__link">
				<img className="header__cart" src={cartIcon} alt="cart"></img>
				Total: {price}$
			</Link>
		</header >
	)
};

const mapStateToProps = ({ price }) => {
	return {
		price,
	}
};

export default connect(mapStateToProps)(AppHeader);