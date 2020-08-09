import React from 'react';
import {IProducts} from '../../interfaces';
import * as utils from '../../utils';
import styles from './item.module.scss';

const Products = ({data, handleAddToCart}: IProducts) => {
	const productsHtml = data.map(item => (
		<div className='col-md-3' key={item.id}>
			<div className={`card ${styles.card} text-center mb-3`}>
				<img src={`products/${item.image}`} alt={item.title} />
				<div className='card-body'>
					<p>{item.title}</p>
					<b>{utils.formatCurrency(item.price)}</b>
					<button
						className={`btn btn-primary ${styles.btn}`}
						onClick={() => handleAddToCart(item.id)}
					>
						<span>Заказать</span>
					</button>
				</div>
			</div>
		</div>
	));
	//console.log('productsHtml', productsHtml);

	return (
		<div className='row'>
			{productsHtml}
		</div>
	);
};

export default Products;
