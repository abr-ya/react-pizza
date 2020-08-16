import React from 'react';
import Banner from '../components/Banner/Banner';
import Sales from '../components/Sales/Sales';
import Products from '../components/Products/Products';
import Filter from '../components/Filter/Filter';
import Delivery from '../components/Delivery/Delivery';
import Work from '../components/Work/Work';
import Inst from '../components/Inst/Inst';
import {IHome, IProduct} from '../interfaces';
//import styles from './pages.module.scss';

// демо-данные напрямую
import data from '../data';

export const Home = ({
	setSort, setSize, addToCart, delFromCart,
	products, sort, size, cart,
}: IHome) => {
	const filteredProducts: IProduct[] = (size && size !== 'all') ? products
		.filter(item => (item.category.includes(size))) : products;
	//console.log('filtered:', filteredProducts);

	// tslint:disable-next-line: no-shadowed-variable
	const sortProductsPriceUp = (products: IProduct[]) =>
		products.sort((prodA: IProduct, prodB: IProduct) => {
			if (prodA.price > prodB.price) return 1;
			if (prodA.price < prodB.price) return -1;

			return 0;
		});

	// tslint:disable-next-line: no-shadowed-variable
	const sortProductsPriceDown = (products: IProduct[]) =>
	products.sort((prodA: IProduct, prodB: IProduct) => {
		if (prodA.price > prodB.price) return -1;
		if (prodA.price < prodB.price) return 1;

		return 0;
	});

	let sortedProducts = filteredProducts;
	if (sort === 'lowestprice') {
		sortedProducts = sortProductsPriceUp(filteredProducts);
	} else if (sort === 'highestprice') {
		sortedProducts = sortProductsPriceDown(filteredProducts);
	}

	const handleAddToCart = (id: string) => {
		//console.log('handleAddToCart', id);
		addToCart(id);
	};

	const sortChange = (text: any) => {
		setSort(text);
	};

	const sizeChange = (text: any) => {
		setSize(text);
	};

	const filterHandlers = {sortChange, sizeChange};

	return (
		<>
			<Banner />{/* fluid */}
			<div className='container'>
				<Sales sales={data.sales} />	
				<div className='row'>
					<div className='col-md-12'>
						<Filter size={size} sort={sort} handlers={filterHandlers} count={sortedProducts.length} />
						<Products data={sortedProducts} handleAddToCart={handleAddToCart} />
					</div>
				</div>
			</div>{/* container */}
			<Delivery />{/* fluid */}
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<Work />
					</div>
				</div>
			</div>{/* container */}
			<Inst />{/* fluid */}
		</>
	);
};
