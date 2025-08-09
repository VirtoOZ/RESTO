import React from 'react';
import { connect } from 'react-redux';
const CartItem = ({ id, key, title, url, price, deleteFromCard, x }) => {
	return (
		<li key={key} className="cart__item">
			<img src={url} className="cart__item-img" alt={title}></img>
			<div className="cart__item-title">{title}</div>
			<div className="cart__item-price">{price}$ x{x} = {price * x}$</div>
			<div className="cart__close" onClick={() => deleteFromCard(id)}>&times;</div>
		</li>
	)
}
const mapStateToProps = ({ items, total }) => {
	return { items, total }
}
export default connect(mapStateToProps,)(CartItem);