import React, {useEffect} from 'react';
import {ICart} from '../../interfaces';
import * as utils from '../../utils';
import styles from './cart.module.scss';
import NumberInputGroup from '../NumberInputGroup/NumberInputGroup';

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

	const minusClickHandler = () => {
		console.log('minusClickHandler');
	};

	const plusClickHandler = () => {
		console.log('plusClickHandler');
	};

	const saveInputHandler = () => {
		console.log('saveInputHandler');
	};

	return (
		<div className={`cart ${styles.cart}`}>
			{Object.keys(cartItems).length === 0
				? 'Ничего не выбрано...' :
				<div>Вы выбрали {Object.keys(cartItems).length} пицц(а,ы):</div>
			}
			{Object.keys(cartItems).length > 0 && (
				<div>
					{cartItemsArr.map(item => {
						const pId = item[0].slice(1); // всё, кроме первого - id
						const pSize: 'S' | 'M' | 'L' = item[0].slice(0,1); // первый символ - размер
						const pQuantity = item[1];
						const product = products.find(prod => prod.id.toString() === pId);
						const total = product ? product.price2[pSize] * pQuantity : 0;
						sum += total;

						if (!product) return (
							<div className={styles.row} key={`${pId}_${pSize}`}>
								Произошла ошибка - id не найден.
							</div>
						);

						return (
							<div className={styles.row} key={`${pId}_${pSize}`}>
								<div className={`${styles.cell} ${styles.image}`}>
									img
								</div>
								<div className={`${styles.cell} ${styles.pizza}`}>
									<h4>{product.title}</h4>
									<span>{`${sizes[pSize]} (${product.price2[pSize]})`}</span>
								</div>
								<div className={`${styles.cell} ${styles.count}`}>
									<NumberInputGroup
										numberValue={pQuantity}
										minusClickHandler={minusClickHandler}
										plusClickHandler={plusClickHandler}
										saveInputHandler={saveInputHandler}
										max={100}
										multiplicity={1}
									/>
								</div>
								<div className={`${styles.cell} ${styles.price}`}>
								{utils.formatCurrency(total)}
									<button
										className={`btn btn-danger btn-xs ${styles.del}`}
										onClick={() => handleRemoveFromCart(`${pSize}${pId}`)}
									>
										x
									</button>
								</div>
							</div>
						);
					})}
				</div>
			)}
			<b>на сумму: {utils.formatCurrency(sum)}</b>
		</div>
	);
};

export default Cart;
