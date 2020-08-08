import React from 'react';
import Header from '../components/Header/Header';
import Sales from '../components/Sales/Sales';
import Products from '../components/Products/Products';
import Filter from '../components/Filter/Filter';
import Cart from '../components/Cart/Cart';
import Delivery from '../components/Delivery/Delivery';
import Work from '../components/Work/Work';
import Inst from '../components/Inst/Inst';
import {IHome, IProduct} from '../interfaces';
import styles from './pages.module.scss';


export const Home = ({
	setSort, setSize, addToCart, delFromCart,
	products, sort, size, cart,
}: IHome) => {
	const filteredProducts: IProduct[] = size ? products.filter(item => (item.availableSizes.includes(size))) : products;
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

	const handleAddToCart = (id: number) => {
		console.log('handleAddToCart', id);
		addToCart(id);
	};

	const handleRemoveFromCart = (id: number) => {
		//console.log('handleRemoveFromCart', id);
		delFromCart(id);
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
			<div className='container'>
				<div className='row'>
					<div className='col-md-12'>
						<Header />
					</div>
				</div>
				<Sales />	
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
			<div className={styles.cartMini}>
				<Cart products={products} cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />
			</div>			
		</>
	);
};
