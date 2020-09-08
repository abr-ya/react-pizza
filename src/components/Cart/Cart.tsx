import React, {useEffect} from 'react';
import {ICart} from '../../interfaces';
import {formatCurrency} from '../../utils';
import styles from './cart.module.scss';
import NumberInputGroup from '../NumberInputGroup/NumberInputGroup';

const Cart = ({products, cartItems, handleRemoveFromCart, updateCart}: ICart) => {
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

	const saveInputHandler = (id: string, quantity: number) => {
		//console.log('saveInputHandler', id, quantity);
		updateCart(id, quantity);
	};

	return (
		<div className={`cart ${styles.cart}`}>
			{Object.keys(cartItems).length === 0 ? 'Ничего не выбрано...' : null /*м.б. кол-во */}
			{Object.keys(cartItems).length > 0 && (
				<div>
					{cartItemsArr.map(item => {
						const pSize: 'S' | 'M' | 'L' = item[0].slice(0,1); // первый символ - размер
						const pId = item[0].slice(1); // всё, кроме первого - id
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
									<div className={styles.circle1}></div>
									<div className={styles.circle2}></div>
									<div className={styles.circle3}></div>
									<div className={`${styles.pizzaImg} ${styles[`pizzaImg${pSize}`]}`}>
										<img src={`products/${product.image}`} alt={product.title} />
									</div>
								</div>
								<div className={`row ${styles.textWrapper}`}>
									<div className={`col-md-5 col-sm-12 ${styles.cell} ${styles.pizza}`}>
										<h4>{product.title}</h4>
										<span>{`${sizes[pSize]} (${formatCurrency(product.price2[pSize])} )`}</span>
									</div>
									<div className={`col-md-4 col-sm-12 ${styles.cell} ${styles.count}`}>
										<NumberInputGroup
											id={`${pSize}${pId}`}
											numberValue={pQuantity}
											saveInputHandler={saveInputHandler}
											max={100}
											multiplicity={1}
										/>
									</div>
									<div className={`col-md-3 col-sm-12 ${styles.cell} ${styles.price}`}>
										<span>{formatCurrency(total)}</span>
										<button
											className={`btn btn-danger btn-xs ${styles.del}`}
											onClick={() => handleRemoveFromCart(`${pSize}${pId}`)}
										>
											x
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
			<div className={styles.summa}>
				<span className={styles.summaText}>Сумма заказа:</span>
				<span className={styles.summaValue}>{formatCurrency(sum)}</span>
			</div>
		</div>
	);
};

export default Cart;
