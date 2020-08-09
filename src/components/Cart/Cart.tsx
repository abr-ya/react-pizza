import React, {useEffect} from 'react';
import {ICart} from '../../interfaces';
import * as utils from '../../utils';
import styles from './cart.module.scss';

const Cart = ({products, cartItems, handleRemoveFromCart}: ICart) => {
	useEffect(() => {
		//console.log('cart in Cart!');
	// eslint-disable-next-line
	}, [cartItems]);

	//console.log('cart: ', cartItems);
	const cartItemsArr = [];
	if (Object.keys(cartItems).length > 0) {
		// tslint:disable-next-line: forin
		for (const key in cartItems) {cartItemsArr.push([key, cartItems[key]]);}
	}
	let sum = 0;
	const sizes = {S: '20см', M: '30см', L: '40см'}

	return (
		<div className={`cart ${styles.cart}`}>
			<div className='alert alert-info'>
				{Object.keys(cartItems).length === 0
					? 'Ничего не выбрано...' :
					<div>Вы выбрали {Object.keys(cartItems).length} пицц(а,ы):</div>
				}
				{Object.keys(cartItems).length > 0 && (
					<ul>
						{cartItemsArr.map(item => {
							const pId = item[0].slice(1); // всё, кроме первого - id
							const pSize: 'S' | 'M' | 'L' = item[0].slice(0,1);
							const pQuantity = item[1];
							const product = products.find(prod => prod.id.toString() === pId);
							const total = product ? product.price2[pSize] * pQuantity : 0;
							sum += total;

							return (
								<li key={`${pId}_${pSize}`}>
									<button
										className={`btn btn-danger btn-xs ${styles.btn}`}
										onClick={() => handleRemoveFromCart(`${pSize}${pId}`)}
									>
										x
									</button>
									{product ? `${product.title} (${sizes[pSize]})` : null } &nbsp;
									{product ? product.price2[pSize] : null } x {pQuantity} = {total}
								</li>
							);
						})}
					</ul>
				)}
				<hr/><b>на сумму: {utils.formatCurrency(sum)}</b>
			</div>
		</div>
	);
};

export default Cart;
