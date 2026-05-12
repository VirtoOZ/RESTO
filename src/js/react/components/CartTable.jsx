import React from 'react';
import { connect } from 'react-redux';
import { deleteFromCart } from '../actions/actions.js';
import { CartItem } from '../components'

const CartTable = ({ items, deleteFromCart }) => {

	return (
		<ul className="cart__list">
			{
				items.map(item => {
					const { key, title, id, url, price, x } = item;
					// if (item.id === id) {
					return (<CartItem
						key={key}
						id={id}
						title={title}
						url={url}
						price={price}
						deleteFromCart={deleteFromCart}
						x={x}
					/>);
					// };
				})
			}
		</ul>
	);
};

const mapStateToProps = ({ items, total }) => ({ items, total });

const mapDispatchToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);