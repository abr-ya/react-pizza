import React, {useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {IApp} from './interfaces';
import Nav from './components/Nav/Nav';
import Loader from './components/Loader/Loader';
import {Home} from './pages/Home';
import {About} from './pages/About';
import New from './pages/New';
import Contact from './pages/Contact';
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
		{link: '/about', name: 'О нас', exact: true},
		{link: '/contact', name: 'Контакты', exact: true},
		// {link: '/new', name: 'Новая', exact: true},
	];

	return (
		<BrowserRouter basename='/demo/pizza/'>
			<div className='container navHeader'>
				<div className='row'>
					<div className='col-md-6'>
						<Nav title={title} links={links} />
					</div>
					<div className='col-md-6'>
						Контакты, Корзина, язык
					</div>
				</div>
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
						<Route path='/contact' component={Contact} />
						<Redirect to='/' />
					</Switch>
				)
			}
			<Footer />
		</BrowserRouter>
	);
};

export default App;
