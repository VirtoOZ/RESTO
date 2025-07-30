import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions/actions';
import CatrItem from '../cart-table-item/cart-table-item.jsx'

const CartTable = ({ items, deleteFromCard, total }) => {

	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<ul className="cart__list">
				{
					items.map((item, i) => {
						const { title, id, url, price, x } = item;
						if (item.id === id) {
						};
						// arr.find(item => item.id === id)
						// const item = items[i];
						const renderItem = (
							<CatrItem
								key={id}
								title={title}
								url={url}
								price={price}
								deleteFromCard={deleteFromCard}
							/>)
						return renderItem;
					})
				}
			</ul>
		</>
	);
};

const mapStateToProps = ({ items, total }) => {
	// console.log(items);
	return {
		items,
		total
	}
};

const mapDispatchToProps = {
	deleteFromCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);