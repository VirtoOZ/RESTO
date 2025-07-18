import React, { Component } from "react";
import './header.scss';
import { Link } from "react-router-dom";

export default class Header extends Component {
	state = {
		onData: null,
	};
	render() {

		return (
			<header className="header">
				<div className="header__wrapper">
					<div className="header__container">
						<div className="header__body">
							<Link to='/GOT-2/' className="header__name">Game of Thrones DB</Link >
							<div className="header__menu menu">
								<button type="button" className="menu__icon icon-menu">
									<span></span>
								</button>
								<nav className="menu__body">
									<ul className="menu__list">
										<li className="menu__item">
											<Link
												className="menu__link"
												to='/characters'
												onClick={() => null}>Characters</Link>
										</li>
										<li className="menu__item">
											<Link
												className="menu__link"
												to='/books'
												onClick={() => null}>Books</Link>
										</li>
										<li className="menu__item">
											<Link
												className="menu__link"
												to='/houses'
												onClick={() => null}>Houses</Link>
										</li>
									</ul>
								</nav>
							</div>
						</div>
						<div className="header__icon icon-menu">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				</div>
			</header>
		)
	}
}