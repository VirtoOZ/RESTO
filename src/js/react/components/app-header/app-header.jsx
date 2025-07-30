import React from 'react';
import { Link } from 'react-router-dom';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import { connect } from 'react-redux';

const AppHeader = ({ total }) => {
	return (
		<header className="header">
			<Link to='/home' className="header__logo">RESTO</Link>
			<Link to='/home' className="header__link">Menu</Link>
			<Link to='/cart/' className="header__link">
				<img className="header__cart" src={cartIcon} alt="cart"></img>
				Total: {total}$
			</Link>
		</header >
	)
};

const mapStateToProps = ({ total }) => {
	return {
		total,
	}
};

// export default AppHeader;
export default connect(mapStateToProps)(AppHeader);