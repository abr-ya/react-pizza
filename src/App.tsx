import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {IApp} from './interfaces';
import Loader from './components/Loader/Loader';
import {Home} from './pages/Home';
import {About} from './pages/About';
import New from './pages/New';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BsModal from './components/BsModal/BsModal';
import Cart from './components/Cart/Cart';

const App = ({
	requestProductsSaga,
	loading,
	products, sort, size, cart,
	setSort, setSize, addToCart, delFromCart, updateCart,
}: IApp) => {
	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const handleRemoveFromCart = (id: string) => {
		//console.log('handleRemoveFromCart', id);
		delFromCart(id);
	};

	return (
		<BrowserRouter
			basename={process.env.NODE_ENV === 'development' ? '/' : '/demo/pizza/'}
		>
			<Header inCart={Object.keys(cart).length} />
			{loading
				? (
					<div className={'container'}>
						<Loader/>
					</div>
				) : (
					<Switch>
						<Route
							path='/'
							exact
							component={() => (
								<Home
									setSort={setSort}
									setSize={setSize}
									addToCart={addToCart}
									delFromCart={delFromCart}
									updateCart={updateCart}
									products={products}
									sort={sort}
									size={size}
									cart={cart}
								/>
							)}
						/>
						<Route path='/about' component={About} />
						<Route path='/new' component={New} />
						<Route path='/contact' component={Contact} />
						<Redirect to='/' />
					</Switch>
				)
			}
			<Footer />
			<BsModal id='bsModal1' title='Ваш заказ'>
				<Cart
					products={products}
					cartItems={cart}
					handleRemoveFromCart={handleRemoveFromCart}
					updateCart={updateCart}
				/>
			</BsModal>
		</BrowserRouter>
	);
};

export default App;
