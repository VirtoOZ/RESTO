import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions/actions';

const CartTable = ({ items, deleteFromCard }) => {

	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					items.map((item) => {
						const { title, id, url, price } = item;
						return (
							<div key={id} className="cart__item">
								<img src={url} className="cart__item-img" alt={title}></img>
								<div className="cart__item-title">{title}</div>
								<div className="cart__item-price">{price}$</div>
								<div className="cart__close" onClick={() => deleteFromCard(id)}>&times;</div>
							</div>
						)
					})
				}
			</div>
		</>
	);
};

const mapStateToProps = ({ items }) => {
	return {
		items,
	}
};

const mapDispatchToProps = {
	deleteFromCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);