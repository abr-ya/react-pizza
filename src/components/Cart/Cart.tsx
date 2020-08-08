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

	return (
		<div className={`cart ${styles.cart}`}>
			<div className='alert alert-info'>
				{Object.keys(cartItems).length === 0
					? 'Basket is empty' :
					<div>You have {Object.keys(cartItems).length} items in the basket:</div>
				}
				{Object.keys(cartItems).length > 0 && (
					<ul>
						{cartItemsArr.map(item => {
							const product = products.find(prod => prod.id.toString() === item[0]);
							const total = product ? product.price * item[1] : 0;
							sum += total;

							return (
								<li key={item[0]}>
									<button className='btn btn-danger btn-xs' onClick={() =>handleRemoveFromCart(item[0])}>x</button>
									{product ? product.title : null } &nbsp;
									{product ? product.price : null } x {item[1]} = ${total}
								</li>
							);
						})}
					</ul>
				)}
				<hr/><b>total: {utils.formatCurrency(sum)}</b>
			</div>
		</div>
	);
};

export default Cart;
