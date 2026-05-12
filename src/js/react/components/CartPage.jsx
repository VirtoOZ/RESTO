import React from 'react';
import { CartTable } from '.';

export const CartPage = () => (
	<div className="cart">
		<div className="cart__title">Ваш заказ:</div>
		<CartTable />
	</div>
);