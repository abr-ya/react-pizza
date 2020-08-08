import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {IApp} from './interfaces';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader/Loader';
import {Home} from './pages/Home';
import {About} from './pages/About';
import New from './pages/New';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';

const App = ({
	requestProductsSaga,
	loading,
	products, sort, size, cart,
	setSort, setSize, addToCart, delFromCart,
}: IApp) => {
	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const title = 'React Pizza Shop App';
	const links = [
		{link: '/', name: 'Меню', exact: true},
		{link: '/about', name: 'About', exact: true},
		{link: '/cart', name: 'Корзина', exact: true},
		{link: '/new', name: 'Новая', exact: true},
	];

	return (
		<BrowserRouter basename='/demo/pizza/'>
			<div className='container'>
				<Nav title={title} links={links} />
			</div>
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
									products={products}
									sort={sort}
									size={size}
									cart={cart}
								/>
							)}
						/>
						<Route path='/about' component={About} />
						<Route path='/new' component={New} />
						<Route path='/cart' component={Cart} />
						<Redirect to='/' />
					</Switch>
				)
			}
			<Footer />
		</BrowserRouter>
	);
};

export default App;
