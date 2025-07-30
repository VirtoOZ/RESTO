import React from 'react';
import './cart-table.scss';
import { connect } from 'react-redux';
import { deleteFromCard } from '../../actions/actions';
import CatrItem from '../cart-table-item/cart-table-item.jsx'

const CartTable = ({ items, deleteFromCard, total }) => {
	items
	return (
		<>
			<div className="cart__title">Ваш заказ:</div>
			<div className="cart__list">
				{
					items.map((el, i, items) => {
						// const item = items[i];
						const { title, id, url, price } = el;
						if (i === 0) {
							return <CatrItem
								id={id}
								title={title}
								url={url}
								price={price}
							/>
						}
						// if (items[i - 1].title === el.title) {
						// 	return null;
						// } else console.log(items[i - 1], el)
					})
					// }
					// items.map((item, i) => {
					// 	const { title, id, url, price } = item;
					// 	if (i === 0) {
					// 		return (
					// 			<div key={id} className="cart__item">
					// 				<img src={url} className="cart__item-img" alt={title}></img>
					// 				<div className="cart__item-title">{title}</div>
					// 				<div className="cart__item-price">{price}$</div>
					// 				<div className="cart__close" onClick={() => deleteFromCard(id)}>&times;</div>
					// 			</div>
					// 		)
					// 	}else{

					// 	}
					// })
				}
			</div>
		</>
	);
};

const mapStateToProps = ({ items, total }) => {
	console.log(items);
	return {
		items,
		total
	}
};

const mapDispatchToProps = {
	deleteFromCard,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);