import React from 'react';
import {IProducts} from '../../interfaces';
import Pizza from '../Pizza/Pizza';
//import styles from './products.module.scss';

const Products = ({data, handleAddToCart}: IProducts) => {
	const productsHtml = data.map(item => (
		<div className='col-md-3' >
			<Pizza data={item} handleAddToCart={handleAddToCart} key={item.id}/>
		</div>
	));
	//console.log('productsHtml', productsHtml);

	return (
		<div className='row mb-4'>
			{productsHtml}
		</div>
	);
};

export default Products;
