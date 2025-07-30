import React from 'react';
import { connect } from 'react-redux';
const CartItem = ({ key, title, url, price, deleteFromCard }) => {
	return (
		<li key={key} className="cart__item">
			<img src={url} className="cart__item-img" alt={title}></img>
			<div className="cart__item-title">{title}</div>
			<div className="cart__item-price">{price}$</div>
			<div className="cart__close" onClick={() => deleteFromCard(key)}>&times;</div>
		</li>
	)
}
const mapStateToProps = ({ items, total }) => {
	return { items, total }
}
export default connect(mapStateToProps,)(CartItem);