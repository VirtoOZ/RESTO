import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions/actions';
import CatrItem from '../cart-table-item/cart-table-item.jsx'

const CartTable = ({ items, deleteFromCard }) => {

	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<ul className="cart__list">
				{
					items.map(item => {
						const { key, title, id, url, price, x } = item;
						if (item.id === id) {
						};
						const renderItem = (
							<CatrItem
								key={key}
								id={id}
								title={title}
								url={url}
								price={price}
								deleteFromCard={deleteFromCard}
								x={x} />)
						return renderItem;
					})
				}
			</ul>
		</>
	);
};

const mapStateToProps = ({ items, total }) => {
	return {
		items,
		total
	}
};

const mapDispatchToProps = {
	deleteFromCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);