import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Header = ({ total }) => {
	return (
		<header className="header">
			<div className="header__container">
				<Link to='/home' className="header__logo">RESTO</Link>
				<Link to='/home' className="header__link">Menu</Link>
				<Link to='/cart/' className="header__link">
					<img
						className="header__cart"
						src='img/shopping-cart-solid.svg'
						alt="cart" />
					Total: {total}$
				</Link>
			</div>
		</header >
	);
};

const mapStateToProps = ({ total }) => ({ total });

export default connect(mapStateToProps)(Header);