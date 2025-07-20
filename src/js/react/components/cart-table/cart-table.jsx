import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';

const CartTable = ({ items, onDelete }) => {

	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					items.map((item) => {
						const { title, id, url, price } = item;
						return (
							<div className="cart__item">
								<img src={url} className="cart__item-img" alt={title}></img>
								<div className="cart__item-title">{title}</div>
								<div className="cart__item-price">{price}$</div>
								<div className="cart__close" onClick={() => onDelete(id)}>&times;</div>
							</div>
						)
					})
				}
			</div>
		</>
	);
};

const mapStateToProps = (state) => {
	return {

	}
};


export default connect(,)(CartTable);